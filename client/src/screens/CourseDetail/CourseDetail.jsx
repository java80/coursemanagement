import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../Layouts/Layout';
import LessonCreate from '../LessonCreate/LessonCreate';
import Lessons from '../Lessons/Lessons';



export default function CourseDetail(props) {
  const [course, setCourse] = useState(null);
  const { allCourses, removeCourse } = props;
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    
    if (allCourses.length > 0) {
      const oneCourse = allCourses.find((course) => course.id === Number(id));
      setCourse(oneCourse);
    }
    
  }, [allCourses, id])
  
  
  return (
    <Layout>
    <div className="course-details">
      {
        course &&
        <div className="card">
          <h3> {course.name}</h3>
          <img src={course.imageurl} alt={course.name} />
          <p>{course.description}</p>
            <p>{course.category}</p>
            {props.currentUser && !props.currentUser.is_student &&
              <>
          <Link to={`/courses/${course.id}/edit`}><button>Update</button></Link>
            <button onClick={() => removeCourse(course.id)}>Delete</button>
              <button onClick={() => setShowForm(prevState => !prevState)}>Add Lesson</button>
              </>
            }
            {
              showForm && <LessonCreate course_id={course.id} setShowForm = {setShowForm} setToggleCourses = {props.setToggleCourses} />
            }
            <Lessons allLessons={course.lessons }/>
           
        </div>
      }
      
      </div>
      </Layout>
  )
}
