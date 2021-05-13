import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Layout from '../../Layouts/Layout';

export default function Courses(props) {
  const {allCourses } = props
  return (
    <Layout>
       <Link to="/courses/new"><button>New course</button></Link>
      <div className="card-list">
        {allCourses.map(course => (
          <React.Fragment key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <Card
                name={course.name}
                imageurl={course.imageurl}
                description={course.description}
                category={course.category}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
     
    </Layout>
  )
}

