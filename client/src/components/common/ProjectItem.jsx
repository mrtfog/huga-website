import React from "react";

export const ProjectItem = (props) => {
  return (
    <div className="project-item">
      <img src={props.data.imageUrl} alt = {props.data.imageUrl}></img>
    </div>
  );
};
