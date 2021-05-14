import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../Layouts/Layout';


export default function LessonDetail(props) {
  const [lesson, setLesson] = useState(null);
  const [allLessons, removeLesson] = props;
  const { id } = useParams;
  
  useEffect(() => {
    
    if (allLessons.length) {
      const oneLesson = allLessons.find((lesson) => lesson.id === Number(id));
      setLesson(oneLesson);
    }

  },[allLessons,id])

  return (
    <Layout>
    <div className="lesson-details">
      {
        lesson &&
        <div className="card">
          <h3> {lesson.lessonname}</h3>
          <p>{lesson.lessonmaterial}</p>
          <Link to={`/lessons/${lesson.id}/edit`}><button>Update</button></Link>
          <button onClick={() => removeLesson(lesson.id)}>Delete</button>
        </div>
      }
      
      </div>
      </Layout>
  )
}
