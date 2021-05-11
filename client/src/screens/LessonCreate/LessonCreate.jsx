import React, { useState } from 'react';
import Layout from '../../Layouts/Layout';

export default function LessonCreate(props) {
  const [formLessonData, setFormLessonData] = useState({
    name: "",
    lessonmaterial: ""
   
  });
  const { name, Lessonmaterial } = formLessonData;
  const { createLesson } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLessonData(prevState => ({
      ...prevState,
      [name]: value

    }));
  }

  return (
    <Layout>
    <div className = "form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          createLesson(formLessonData);
        }}>
          <h3> Create Lesson</h3>
          <label> Name:
           <input
              type="text"
              name="name"
              value={name}
              onChange = {handleChange}
          />
          </label>
         
          <label> Lesson Material:
           <input
              type="text"
              name="lessonmaterial"
              value={Lessonmaterial}
              onChange = {handleChange}
          />
          </label>
      
          <button>Submit</button>
      </form>
      </div>
    </Layout>
  );
}

