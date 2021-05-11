import React, { useState } from 'react';
import Layout from '../../Layouts/Layout';

export default function CourseCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    imageurl: "",
    description: "",
    category: ""
  });
  const { name, imagurl, description, category } = formData;
  const { createCourse } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value

    }));
  }

  return (
    <Layout>
    <div className = "form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          createCourse(formData);
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
          <label> Name:
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

