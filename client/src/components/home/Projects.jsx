import React, { useEffect, useState } from "react";
import { ProjectItem } from "../common/ProjectItem";
import { PORTFOLIO } from "../../constants";

const Projects = ()  => {
  const categories = [
    "Figurines",
    "Estampas",
    "Ilustraciones",
    "Fichas tecnicas",
  ];
  const [data, setData] = useState([]);

  async function requestDataProjects(event = null) {
    try {
      if (event != null) {
        const responseCategory = PORTFOLIO.filter(
          (project) => project.category == event.target.id
        );
        setData(responseCategory);
      } else {
        setData(PORTFOLIO.splice(1, 12));
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    requestDataProjects();
  }, []);

  return (
  
    <section className="projects" id = "Proyectos">
      <h2>
        <span>Conocé mis</span> proyectos!
      </h2>
      <div className="projects-container">
        <div className="categories">
          {categories.map((category) => {
            return (
              <button
                id={category}
                className="categories-btn"
                onClick={(event) => requestDataProjects(event)}
                key={category}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="projects-box">
          {data.map((child) => {
            return <ProjectItem data={child} key = {child.id}/>;
          })}
        </div>
      </div>
    </section>
    
  );
}

export default Projects