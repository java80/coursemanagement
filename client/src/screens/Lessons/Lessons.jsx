import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Layout from '../../Layouts/Layout';

export default function Lessons(props) {
  const {allLessons } = props
  return (
    <Layout>
      <div className="card-list">
        {allLessons.map(lesson => (
          <React.Fragment key={lesson.id}>
            <Link to={`/lessons/${lesson.id}`}>
              <Card
                title={lesson.name}
                lessonmaterial={lesson.lessonmaterial}
                
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/courses/new"><button>New Lesson</button></Link>
    </Layout>
  )
}

