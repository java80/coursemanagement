import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layouts/Layout';
import { putLesson } from '../../services/lessons';

export default function LessonEdit(props) {
  const [formLessonData, setFormLessonData] = useState({
    name: props.currentLesson.lessonname,
    lessonmaterial: props.currentLesson.lessonmaterial
   
  });
  const { name, lessonmaterial} = formLessonData;
  const { updateLesson, allLessons } = props;
  const { id } = useParams();

  const handleSubmit = async (e) => {
     e.preventDefault();
  // updateLesson(id, formLessonData);
    const res =  await putLesson(
      props.currentLesson.id,
      props.course_id,
      formLessonData
    );
    console.log("Res",res)
  }

  // useEffect(() => {
  //   const prefillFormLessonData = () => {
  //     const oneLesson = allLessons.find(lesson => {
  //       return lesson.id === Number(id);
  //     })
  //     const { name, lessonmaterial} = oneLesson;
  //     setFormLessonData({ name, lessonmaterial});
  //   }
  //   if (allLessons.length> 0) {
  //     prefillFormLessonData()
  //   }
  // }, [allLessons, id])
  console.log(props.currentLesson);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLessonData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Layout>
      <div className="form-container">
        <form
          onSubmit={ handleSubmit}
        >
          <h3>Update lesson</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label>
            Lesson Material:
            <input
              type="text"
              name="lessonmaterial"
              value={lessonmaterial}
              onChange={handleChange}
            />
          </label>

          <button>Submit</button>
          <button>Cancel</button>
        </form>
      </div>
    </Layout>
  );
}
