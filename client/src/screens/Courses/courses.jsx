import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Layout from '../../Layouts/Layout';

export default function Courses(props) {
  const {allCourses } = props
  return (
    <Layout>
      <div className="card-list">
        {allCourses.map(course => (
          <React.Fragment key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <Card
                title={course.name}
                image={course.imageurl}
                description={course.breed}
                category={course.category}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/courses/courses"><button>New course</button></Link>
    </Layout>
  )
}

