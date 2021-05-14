import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layouts/Layout';

export default function CourseEdit(props) {
  const [formLessonData, setFormLessonData] = useState({
    name: "",
    lessonmaterial: ""
   
  });
  const { name, lessonmaterial} = formLessonData;
  const { updateLesson, allLessons } = props;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormLessonData = () => {
      const oneLesson = allLessons.find(lesson => {
        return lesson.id === Number(id);
      })
      const { name, lessonmaterial} = oneLesson;
      setFormLessonData({ name, lessonmaterial});
    }
    if (allLessons.length) {
      prefillFormLessonData()
    }
  }, [allLessons, id])


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
        <form onSubmit={(e) => {
          e.preventDefault()
          updateLesson(id, formLessonData);
        }}>
          <h3>Update lesson</h3>
          <label>Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
         
          <label>Lesson Material:
            <input
              type="text"
              name="lessonmaterial"
              value={lessonmaterial}
              onChange={handleChange}
            />
          </label>

          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}
