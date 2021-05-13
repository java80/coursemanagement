import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import CourseCreate from '../../screens/CourseCreate/CourseCreate';
import CourseDetail from '../../screens/CourseDetail/CourseDetail';
import CourseEdit from '../../screens/CourseEdit/courseEdit';
import Courses from '../../screens/Courses/courses';
import { getAllCourses, deleteCourse, postCourse, putCourse, getOneCourse } from '../../services/courses';

export default function CourseContainer(props) {
  const [allCourses, setAllCourses] = useState([]);
  const [toggleCourse, setToggleCourses] = useState(false)
  const history = useHistory();

  useEffect(() => {
    fetchCourses();
  }, [toggleCourse])

  const fetchCourses = async () => {
    const courses = await getAllCourses();
    setAllCourses(courses)
  }
  const createCourse = async (courseData) => {
    const newCourse = await postCourse(courseData);
    setAllCourses(prevState => ([
      ...prevState,
      newCourse
    ]));
    history.push('/courses');
  }

  const updateCourse = async (id, courseData) => {
    const updatedCourse = await putCourse(id, courseData);
    setAllCourses(prevState => prevState.map(course => {
      return course.id === Number(id) ? updatedCourse : course
    }))
    history.push('/courses')
  }

  const removeCourse = async (id) => {
    await deleteCourse(id);
    setAllCourses(prevState => prevState.filter(course => course.id !== id));
    history.push('/courses')
  }
  return (
    <>
      <Switch>
        <Route path='/courses/new'>
          <CourseCreate
            createCourse={createCourse}
          />
        </Route>
        <Route path='/courses/:id/edit' exact>
          <CourseEdit
            updateCourse={updateCourse}
            allCourses={allCourses}
          />
        </Route>
        <Route path='/courses/:id' exact>
          <CourseDetail
            allCourses={allCourses}
            removeCourse={removeCourse}
            currentUser={props.currentUser}
            setToggleCourses = {setToggleCourses}
          />
        </Route>
        <Route path='/courses'>
          <Courses  currentUser={props.currentUser}
            allCourses={allCourses}
          />
        </Route>
        <Route path='/'>
          <Courses  currentUser={props.currentUser}
            allCourses={allCourses}
          />
        </Route>
      </Switch>
    </>
  );
}

