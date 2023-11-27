import React from "react";

export const ProjectItem = (props) => {
  return (
    <article className="project-item">
      <img src={props.data.imageUrl} alt = {""}></img>
    </article>
  );
};
