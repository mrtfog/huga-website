import React, { useEffect, useState } from "react";
import { ProjectItem } from "../common/ProjectItem";

export function Projects() {
  const categories = [
    "Figurines",
    "Estampas",
    "Ilustraciones",
    "Fichas tecnicas",
  ];
  const [data, setData] = useState([]);

  async function requestDataProjects(event = null) {
    try {
      const request = await fetch("DB/projects.json");
      const responseJson = await request.json();
      if (event != null) {
        const responseCategory = responseJson.filter(
          (project) => project.category == event.target.id
        );
        setData(responseCategory);
      } else {
        setData(responseJson.splice(1, 12));
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    requestDataProjects();
  }, []);

  return (
    <>
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
    </>
  );
}
