import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../Layouts/Layout';


export default function CourseDetail(props) {
  const [course, setCourse] = useState(null);
  const { allCourses, removeCourse } = props;
  const { id } = useParams();
  
  useEffect(() => {
    
    if (allCourses.length > 0) {
      const oneCourse = allCourses.find((course) => course.id === Number(id));
      setCourse(oneCourse);
    }

  },[allCourses,id])

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
          <Link to={`/courses/${course.id}/edit`}><button>Update</button></Link>
          <button onClick={() => removeCourse(course.id)}>Delete</button>
        </div>
      }
      
      </div>
      </Layout>
  )
}
