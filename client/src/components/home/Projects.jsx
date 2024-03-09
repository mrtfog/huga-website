import { useEffect, useState } from "react";
import { ProjectItem } from "../common/ProjectItem";
import { PORTFOLIO } from "../../lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Figurines",
    "Estampas",
    "Ilustraciones",
    "Fichas técnicas",
  ];

  function requestDataProjects(event = null) {
    const splicedPortfolio = [...PORTFOLIO];
    
    if (event != null) {

      if(event.target.id === selectedCategory){
        setSelectedCategory("");
        setData(splicedPortfolio);
      } else {
        setSelectedCategory(event.target.id);
        const responseCategory = PORTFOLIO.filter((project) => project.category === event.target.id);
        setData(responseCategory);
      }

    } else {
      setData(splicedPortfolio);
    }
  }

  useEffect(() => {
    requestDataProjects();
  }, []);

  return (
    <section className="projects" id="Proyectos">
      <h2>
        <span>Conocé mis</span> proyectos!
      </h2>
      <div className="projects-container">
        <div className="categories">
          {categories.map((category) => {
            return (
              <button
                id={category}
                className={`categories-btn ${category === selectedCategory ? "btn-selected" : ""}`}
                onClick={(event) => requestDataProjects(event)}
                key={category}
              >
                {category}
              </button>
            );
          })}
        </div>
        <motion.div layout className="projects-box">
          <AnimatePresence>
            {data.map((child) => {
              return <ProjectItem data={child} key={child.id} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
