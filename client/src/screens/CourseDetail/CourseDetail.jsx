import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Layout from "../../Layouts/Layout";
import LessonCreate from "../LessonCreate/LessonCreate";
import Lessons from "../Lessons/Lessons";

export default function CourseDetail(props) {
  const [course, setCourse] = useState(null);
  const { allCourses, removeCourse } = props;
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (allCourses.length > 0) {
      const oneCourse = allCourses.find((course) => course.id === Number(id));
      setCourse(oneCourse);
    }
  }, [allCourses, id]);

  return (
    <Layout>
      <div className="mainDivSignUp">
        <div className="signUpContainer">
          <div className="container-fluid">
            {course ? (
              <div className="row">
                <div className="imgContainer2 col-12 col-md-6 pe-0 ps-0 ps-md-3">
                  <img
                    width="500px"
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

             
            <table
              class="table"
              style={{ marginRight: "130px", border: "1px solid #008080" }}
            >
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fundamentals of Reactjs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Introduction to React</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>All about useState Hook</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Learn useEffect hook in 20 minutes</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>React Router</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Intro to Redux</td>
                </tr>
              </tbody>
            </table>
            )
          </div>
        </div>
      </div>
      <br />
      {/* <div className="cardList">
        <div className="container-fluid">
          <div className="row mt-2">
            {course.lessons.map((course, i) => {
              return (
                <div className="col-sm-6 col-md-4 col-xl-3 mt-3">
                  <Link
                    className="text-dark text-decoration-none"
                    to={`/courses/${course.id}`}
                  >
                    <Card
                      key={i}
                      name={course.name}
                      imageurl={course.imageurl}
                      description={course.description}
                      category={course.category}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      {course && (
        <div className="addUpdateLesson">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-10 col-md-7 col-lg-5 mx-auto">
                <div className="radiusBorder shadow p-3">
                  <h4 className="fw-bold text-center"> {course.name}</h4>
                  <div className="imgContaineradd">
                    <img width="100%" src={course.imageurl} alt="" />
                  </div>
                  <div className="text-center mt-3">
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                  </div>
                  <div className="btnContainer d-flex justify-content-between mt-5">
                    <div>
                      <button className="update px-3 py-1 text-white me-3 shadow-sm">
                        Update
                      </button>
                      <button className="delete px-3 py-1 shadow-sm">
                        Delete
                      </button>
                    </div>
                    <button
                      onClick={() => setShowForm((prevState) => !prevState)}
                      className="add text-white px-3 py-1 shadow-sm"
                    >
                      Add Lesson
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      <div className="cardList mb-4">
        <div className="card-container-fluid">
          {/* <div className="row mt-2">
            {[1, 1, 1, 1].map((course, i) => {
              return (
                <div className="col-sm-6 col-md-4 col-xl-3 mt-3">
                  <Link
                    className="text-dark text-decoration-none"
                    to={`/courses/${course.id}`}
                  >
                    <Card
                      key={i}
                      name={course.name}
                      imageurl={course.imageurl}
                      description={course.description}
                      category={course.category}
                    />
                  </Link>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>

      <div className="course-details">
        {course && (
          <div className="card">
            {/* <h3> {course.name}</h3>
						<img src={course.imageurl} alt={course.name} />
						<p>{course.description}</p>
						<p>{course.category}</p> */}
            {props.currentUser && !props.currentUser.is_student && (
              <>
                {/* <Link to={`/courses/${course.id}/edit`}>
									<button>Update</button>
								</Link>
								<button onClick={() => removeCourse(course.id)}>Delete</button>
								<button onClick={() => setShowForm((prevState) => !prevState)}>
									Add Lesson
								</button> */}
              </>
            )}
            {showForm && (
              <LessonCreate
                course_id={course.id}
                setShowForm={setShowForm}
                setToggleCourses={props.setToggleCourses}
              />
            )}
            <Lessons allLessons={course.lessons} />
          </div>
        )}
      </div>
    </Layout>
  )
}