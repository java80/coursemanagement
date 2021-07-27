import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import { putLesson } from "../../services/lessons";
import { useHistory } from "react-router-dom";

export default function LessonEdit(props) {
  console.log(props.currentLesson);
  const [formLessonData, setFormLessonData] = useState({
    lessonname: props.currentLesson.lessonname,
    lessonmaterial: props.currentLesson.lessonmaterial,
  });
  const { lessonname, lessonmaterial } = formLessonData;
  // const { createLesson } = props
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLessonData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCancel = () => {
    props.setShowForm(false);
    props.setShowUpdate(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await putLesson(
      props.currentLesson.id,
      props.course_id,
      formLessonData
    );
    console.log(res);
    props.setShowUpdate(false);
    props.setToggleCourses((prevState) => !prevState);
  };
  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3> {props.formTitle}</h3>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="lessonname"
              value={lessonname}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            {" "}
            Video Link:
            <input
              type="text"
              name="lessonmaterial"
              value={lessonmaterial}
              onChange={handleChange}
              required
            />
          </label>

          <button>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    </Layout>
  );
}
