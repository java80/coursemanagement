import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import { useHistory } from "react-router-dom";
import "./CourseCreate.css"
export default function CourseCreate(props) {
  let history = useHistory();
  const [formCourseData, setFormCourseData] = useState({
    name: "",
    imageurl: "",
    description: "",
    category: "",
  });
  const { name, imagurl, description, category } = formCourseData;
  const { createCourse } = props;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCourseData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <Layout>
      <div className="form-container form-group ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createCourse(formCourseData);
          }}
        >
          <h3 className = "display-5"> Create Course</h3>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {" "}
            Image Url:
            <input
              type="text"
              name="imageurl"
              value={imagurl}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {" "}
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            Category:
            <input
              type="text"
              name="category"
              value={category}
              onChange={handleChange}
            />
          </label>
          <div className = "button-align">
            <button className="btn btn-primary">Submit</button>
            <button className="btn btn-warning" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
