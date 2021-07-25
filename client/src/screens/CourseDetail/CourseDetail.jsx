import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Layout from "../../Layouts/Layout";
import LessonCreate from "../LessonCreate/LessonCreate";
import Lessons from "../Lessons/Lessons";
import ReactPlayer from "react-player";
import LessonEdit from "../LessonEdit/LessonEdit";
import { deleteLesson } from "../../services/lessons";

export default function CourseDetail(props) {
  const [course, setCourse] = useState(null);
  const { allCourses, removeCourse } = props;
  const [showForm, setShowForm] = useState(false);
  const [showupdate, setShowUpdate] = useState(false);
  const [currentLesson, setCurrentLesson] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    if (allCourses.length > 0) {
      const oneCourse = allCourses.find((course) => course.id === Number(id));
      setCourse(oneCourse);
    }
  }, [allCourses, id]);

  const handleLessonUpdate = (lesson) => {
    
    setShowUpdate(!showupdate);
    setCurrentLesson(lesson)

  }
  const handleDeleteLesson = async (course_id, lessonId) => {
     const res = await deleteLesson(
      course_id,
      lessonId
    );
  }

  return (
    <Layout>
      <div className="container-fluid d-flex">
        <div className="signUpContainer">
          <div className="container-fluid d-flex">
            {course ? (
              <div className="row">
                <div className="imgContainer2 col-12 col-md-6 pe-0 ps-0 ps-md-3">
                  <img
                    width="100%"
                    height="100%"
                    src={course.imageurl}
                    alt=""
                  />
                </div>
                <div className="col-10 col-md-9 py-3">
                  <h3 className="fw-bold themeLine">{course.name}</h3>
                  <p>{course.description}</p>
                  <h6 className="fw-bold float-end">{course.category}</h6>
                </div>
              </div>
            ) : (
              <h1>Course loading</h1>
            )}
          </div>
          <div>
            {showForm && (
              <LessonCreate
                course_id={course.id}
                setShowForm={setShowForm}
                setToggleCourses={props.setToggleCourses}
                formTitle={"Create Lesson"}
              />
            )}

            {showupdate && (
              <LessonEdit
                course_id={course.id}
                setShowForm={setShowForm}
                setToggleCourses={props.setToggleCourses}
                formTitle={"update Lesson"}
                currentLesson = {currentLesson}
              />
            )}
            {course && props.currentUser && !props.currentUser.is_student && (
              <div className="btnContainer d-flex justify-content-between mt-5 p-5">
                <div>
                  <Link to={`/courses/${course.id}/edit`}>
                    <button className="btn btn-primary update px-3 py-1 text-white me-3 shadow-sm">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="btn btn-danger delete px-3 py-1 shadow-sm"
                  >
                    Delete
                  </button>
                </div>
                <button
                  onClick={() => setShowForm((prevState) => !prevState)}
                  className="btn btn-primary text-white px-3 py-1 shadow-sm"
                >
                  Add Lesson
                </button>
              </div>
            )}
          </div>
        </div>
        <table
          className="table mt-8"
          style={{
            height: "500px",
            marginTop: "135px",
            border: "1px solid #008080",
          }}
        >
          <thead className="thead-dark">
            <tr>
              {/* <th scope="col">#</th>
              <th scope="col"></th> */}
            </tr>
          </thead>
          <tbody>
            {course && course.lessons ? (
              course.lessons.map((lesson, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{lesson.lessonname}</td>
                    <td>
                      <ReactPlayer url={lesson.lessonmaterial} />
                      {/* <Link to={`/courses/${id}/lessons/${lesson.id}/edit`}> */}
                        <button
                          onClick={() => handleLessonUpdate(lesson)}
                          className="btn btn-primary update px-3 py-1 text-white me-3 shadow-sm"
                        >
                          Update{" "}
                        </button>
                      {/* </Link> */}

                      <button onClick = {()=> handleDeleteLesson(course.id,lesson.id)} className="btn btn-danger delete px-3 py-1 text-white me-3 shadow-sm">
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1> Updating data</h1>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
