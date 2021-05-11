import React, { useState } from 'react';
import Layout from '../../Layouts/Layout';

export default function CourseCreate(props) {
  const [formCourseData, setFormCourseData] = useState({
    name: "",
    imageurl: "",
    description: "",
    category: ""
  });
  const { name, imagurl, description, category } = formCourseData;
  const { createCourse } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCourseData(prevState => ({
      ...prevState,
      [name]: value

    }));
  }

  return (
    <Layout>
    <div className = "form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          createCourse(formCourseData);
        }}>
          <h3> Create Course</h3>
          <label> Name:
           <input
              type="text"
              name="name"
              value={name}
              onChange = {handleChange}
          />
          </label>
          <label> Image Url:
           <input
              type="text"
              name="imageurl"
              value={imagurl}
              onChange = {handleChange}
          />
          </label>
          <label> Description:
           <input
              type="text"
              name="description"
              value={description}
              onChange = {handleChange}
          />
          </label>
          <label> Category:
           <input
              type="text"
              name="category"
              value={category}
              onChange = {handleChange}
          />
          </label>
          <button>Submit</button>
      </form>
      </div>
    </Layout>
  );
}

