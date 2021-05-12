import React, {useEffect,useState } from 'react';
import CourseContainer from '../../containers/CourseContainer/CourseContainer';
import Layout from '../../Layouts/Layout';
import CourseCreate from '../CourseCreate/CourseCreate';
import { Route, Switch } from "react-router-dom";
export default function Home() {
  const [courses, setCourses] = useState([]);
   
  useEffect(() => {
    displayCourses();
  }, []);

  const displayCourses = async () => {
    // let result = await getAllCourses();
    // setCourses(result);
  }

  return (
    <>
      <Layout>
        <h3>Welcome to the You Teach App</h3>
        
      </Layout>
    </>
  )
}
