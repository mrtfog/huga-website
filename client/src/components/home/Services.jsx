import { ServicesAvatar } from "../../lib/images";
import { motion } from "framer-motion";

const Services = ({ sectionData }) => {
  return (
    <section className="services" id="Servicios">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0"
      >
        <path
          fill="#AB7994"
          fillOpacity="1"
          d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="services-container">
        <div className="flex-box">
          <h2>Servicios</h2>
          <div className="services-grid">
            {sectionData && sectionData.services && sectionData.services.length
              ? sectionData.services.map((service, i) => {
                  return (
                    <motion.a
                      key={i}
                      href={service.url}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <img src={service.image} alt={"service image"} />
                    </motion.a>
                  );
                })
              : ""}
          </div>
        </div>
        <img
          className="services-avatar"
          src={ServicesAvatar}
          alt={"service avatar"}
        ></img>
      </div>
    </section>
  );
};

export default Services;
