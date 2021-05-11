import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layouts/Layout';

export default function CourseEdit(props) {
  const [formCourseData, setFormCourseData] = useState({
    name: "",
    imageurl: "",
    description: "",
    category: ""
  });
  const { name, imageurl, description,category } = formCourseData;
  const { updateCourse, allCourses } = props;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormCourseData = () => {
      const oneCourse = allCourses.find(course => {
        return course.id === Number(id);
      })
      const { name, imageurl, description,category } = oneCourse;
      setFormCourseData({ name, imageurl, description,category });
    }
    if (allCourses.length) {
      prefillFormCourseData()
    }
  }, [allCourses, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCourseData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          updateCourse(id, formCourseData);
        }}>
          <h3>Update Course</h3>
          <label>Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>Image Url:
            <input
              type="text"
              name="imageurl"
              value={imageurl}
              onChange={handleChange}
            />
          </label>
          <label>Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
          <label>Category:
            <input
              type="text"
              name="category"
              value={category}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}
