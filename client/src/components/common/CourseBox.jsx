import React from "react";

export function CourseBox({ courseName, image, modal, courseId}) {
  return (
    <div className="course-box">
      <img src={image} />
      <div className="course-box-info">
        <h3>{courseName}</h3>
        <button name={courseId} onClick={modal} className="btn">
          Ver más
        </button>
      </div>
    </div>
  );
}
