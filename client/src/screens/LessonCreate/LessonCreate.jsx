import React, { useState } from 'react';
import Layout from '../../Layouts/Layout';
import { postLesson } from '../../services/lessons';
import { useHistory } from 'react-router-dom';

export default function LessonCreate(props) {
  const [formLessonData, setFormLessonData] = useState({
    lessonname: "",
    lessonmaterial: ""
   
  });
  const {lessonname, lessonmaterial } = formLessonData;
  // const { createLesson } = props
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLessonData(prevState => ({
      ...prevState,
      [name]: value

    }));
  }
  const handleCancel = () => {
    props.setShowForm(false);
  }
  const handleSubmit =async (e) => {
    e.preventDefault()
    const res = await postLesson(formLessonData, props.course_id);
     console.log(res)
    props.setToggleCourses(prevState => !prevState)
  }
  return (
    <Layout>
    <div className = "form-container">
        <form onSubmit= {handleSubmit}>
          <h3> Create Lesson</h3>
          <label> Name:
           <input
              type="text"
              name="lessonname"
              value={lessonname}
              onChange = {handleChange}
          />
          </label>
         
          <label> Lesson Material:
          
           <input
              type="text"
              name="lessonmaterial"
              value={lessonmaterial}
              onChange = {handleChange}
              
          />
          </label>
      
          <button>Submit</button>
          <button onClick = {handleCancel}>Cancel</button>
      </form>
      </div>
    </Layout>
  );
}

