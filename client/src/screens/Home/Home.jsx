import React, {useEffect,useState } from 'react';
import CourseContainer from '../../containers/CourseContainer/CourseContainer';
import Layout from '../../Layouts/Layout';
export default function Home(props) {

  return (
    <>
      <Layout>
        <h3 className="homeheading ">
          Welcome to the You <span className = "themeLine"> Teach App </span>
        </h3>
        <CourseContainer currentUser={props.currentUser} />
      </Layout>
    </>
  );
}
