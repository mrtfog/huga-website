import { useEffect, useState } from "react";
import { ProjectItem } from "../common/ProjectItem";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ sectionData }) => {
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "figurines",
    "estampas",
    "ilustraciones",
    "fichas técnicas",
  ];

  function requestDataProjects(event = null) {
    const splicedPortfolio = [...sectionData.portfolio];

    if (event != null) {
      if (event.target.id === selectedCategory) {
        setSelectedCategory("");
        setFilteredPortfolio(splicedPortfolio);
      } else {
        setSelectedCategory(event.target.id);
        const responseCategory = sectionData.portfolio?.filter(
          (project) => project.type === event.target.id
        );
        setFilteredPortfolio(responseCategory);
      }
    } else {
      setFilteredPortfolio(splicedPortfolio);
    }
  }

  useEffect(() => {
    requestDataProjects();
  }, [sectionData]);

  console.log(sectionData);

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
                className={`categories-btn ${
                  category === selectedCategory ? "btn-selected" : ""
                }`}
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
            {filteredPortfolio && filteredPortfolio.length
              ? filteredPortfolio.map((child) => {
                  return <ProjectItem data={child} key={child._id} />;
                })
              : ""}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
