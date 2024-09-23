import { motion } from "framer-motion";

const ProjectItem = ({ data }) => {
  // console.log(data);
  return (
    <motion.article
      className="project-item"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="project__image">
        <img
          src={data?.image}
          alt={`${data?.title} image`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="project__information">
        <header className="information__header">
          <h3>{data?.title}</h3>
          <p>{data?.description}</p>
        </header>
        {/* <footer className="information__cta">
          <button>Ver caso de estudio</button>
        </footer> */}
      </div>
    </motion.article>
  );
};

const Projects = ({ sectionData }) => {
  const portfolio = sectionData.portfolio || null;

  return (
    <section className="projects" id="Proyectos">
      <h2>
        <span>Caso de</span> Estudio
      </h2>
      <div className="projects-container">
        {portfolio && portfolio.length
          ? portfolio.map((project) => (
              <ProjectItem key={project._id} data={project} />
            ))
          : ""}
      </div>
    </section>
  );
};

export default Projects;
