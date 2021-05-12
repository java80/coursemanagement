import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import LessonCreate from '../../screens/LessonCreate/LessonCreate';
import LessonDetail from '../../screens/LessonDetail/LessonDetail';
import LessonEdit from '../../screens/LessonEdit/LessonEdit';
import Lessons from '../../screens/Lessons/Lessons';

import { getAllLesson, deleteLesson, postLesson, putLesson} from '../../services/lessons';

export default function LessonContainer(props) {
  const [allLessons, setAllLessons] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchLessons();
  }, [])
  const fetchLessons = async () => {
    const lessons = await getAllLesson();
    setAllLessons(lessons)
  }
  const createLesson = async (lessonData) => {
    const newLesson = await postLesson(lessonData);
    setAllLessons(prevState => ([
      ...prevState,
      newLesson
    ]));
    history.push('/lessons');
  }
  const updateLesson = async (id, lessonData) => {
    const updatedLesson = await putLesson(id, lessonData);
    setAllLessons(prevState => prevState.map(lesson => {
      return lesson.id === Number(id) ? updatedLesson : lesson
    }))
    history.push('/lessons')
  }
  const removeLesson = async (id) => {
    await deleteLesson(id);
    setAllLessons(prevState => prevState.filter(lesson => lesson.id !== id));
    history.push('/lessons')
  }
  return (
    <>
      <Switch>
        <Route path='/lessons/new'>
          <LessonCreate
            createLesson={createLesson}
          />
        </Route>
        <Route path='/lessons/:id/edit'>
          <LessonEdit
            updateLesson={updateLesson}
            allCourses={allLessons}
          />
        </Route>
        <Route path='/lessons/:id'>
          <LessonDetail
            LessonDetail={allLessons}
            removeLesson={removeLesson}
          />
        </Route>
        <Route path='/lessons'>
          <Lessons
            allLessons={allLessons}
          />
        </Route>
      </Switch>
    </>
  );
}

