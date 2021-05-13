import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import LessonCard from '../../components/LessonCard/LessonCard';
import Layout from '../../Layouts/Layout';

export default function Lessons(props) {
  const {allLessons } = props
  return (
    <Layout>
      <div className="card-list">
        { allLessons && allLessons.map(lesson => ( 
              <LessonCard
                lessonname={lesson.lessonname}
                lessonmaterial={lesson.lessonmaterial}
                key = {lesson.id}
              />
           
        ))}
      </div>
      {/* <Link to="/lessons/new"><button>New Lesson</button></Link> */}
    </Layout>
  )
}

