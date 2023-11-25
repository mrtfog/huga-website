import React from "react";
import { CourseBox } from "../common/CourseBox.jsx";
import coursesAvatar from "../../assets/img/avatars/courses.png";
import { ModalCourses } from "../common/ModalCourses.jsx";
import { coursesData } from "../../constants/courses.js";

//This function will create modals windows about the differents courses.
const showModalCourse = (event) => {
  const modalCourse = document.getElementById(event.target.name);
  modalCourse.classList.toggle("enabled");
};

const Courses = () => {
  return (
    <>
      {
        //Creating modalCourses windows.
        coursesData.map((course) => {
          return <ModalCourses id={course.id} data={course} key={course.id} />;
        })
      }
      <section className="courses" id = "Cursos">
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#D57C8C"
            fill-opacity="1"
            d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="course-container">
          <div id = "courses-avatar"><img src={coursesAvatar} alt = {coursesAvatar}></img></div>
          <div className="course-info">
            <h2>
              Visitá <br />
              <span>mis cursos!</span>
            </h2>
            <div className="course-box-container">
            {coursesData.map((course) => {
              return (
                <CourseBox
                  key = {course.id}
                  courseId={course.id}
                  modal={showModalCourse}
                  courseName={course.title}
                  image={course.image}
                  url={course.url}
                ></CourseBox>
              );
            })}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses
