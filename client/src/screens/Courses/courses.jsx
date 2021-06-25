import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Layout from "../../Layouts/Layout";
export default function Courses(props) {
  const { allCourses } = props;
  console.log("all courses", allCourses);
  return (
    <Layout>
      <div style={{ marginTop: props.courses && "6rem" }} className="cardList">
        <div className="container-fluid">
          <div className="row mt-2">
            {allCourses.map((course, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-4 col-xl-3 mt-3">
                  <Link
                    className="text-dark text-decoration-none"
                    to={`/courses/${course.id}`}
                  >
                    <Card
                      key={index}
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
        {props.currentUser && !props.currentUser.is_student && (
          <div className="btn-new-course">
            <Link to="/courses/new">
              <button className="btn btn-primary">New course</button>
            </Link>
          </div>
        )}{" "}
      </div>
    </Layout>
  );
}
