import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSanity } from "../../../hooks/useSanity";
import { Helmet } from "react-helmet";
import { Typography } from "../../../components";
import { BsArrowLeft, BsArrowRight, BsLink as LinkIcon } from "react-icons/bs";
import { PersonalAvatar } from "../../../lib/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "../../../assets/styles/components/services/ServiceDetails.css";
import "swiper/css";
import "swiper/css/pagination";

const ServiceDetails = () => {
  const [currentService, setCurrentService] = useState(null);
  const [serviceNotFound, setServiceNotFound] = useState(false);
  const { id } = useParams();
  const { services, getServices } = useSanity();

  useEffect(() => {
    if (services) {
      const findCurrentService = services.find((service) => service._id === id);

      if (findCurrentService) {
        setCurrentService(findCurrentService);
        setServiceNotFound(false);
      } else {
        setServiceNotFound(true);
      }
    } else {
      getServices();
    }
  }, [id, services, getServices]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Hüga | ${currentService?.title}`}</title>
        <meta name="description" content={currentService?.description} />
        <meta
          name="keywords"
          content="diseño de indumentaria, diseño gráfico, branding, identidad de marca, redes sociales, producto, ilustración, fotografía de moda, estampas, fichas técnicas, logotipos"
        />
        <meta property="og:title" content={`Hüga | ${currentService?.title}`} />
        <meta property="og:description" content={currentService?.description} />
        <meta
          property="og:site_name"
          content={`Hüga | ${currentService?.title}`}
        ></meta>
      </Helmet>
      {serviceNotFound ? (
        " Servicio No Encontrado"
      ) : (
        <>
          <section className="service-hero">
            <div className="service-hero__inner">
              <div className="service-hero__description">
                <Typography as="h1" variant="h1" color="white">
                  {currentService?.title}
                </Typography>
                <Typography as="p" variant="medium" color="lightGray">
                  {currentService?.description}
                </Typography>
              </div>
              <div className="service-hero__video">
                {currentService && currentService.serviceIntroducingVideo ? (
                  <video
                    loop
                    poster={currentService?.image}
                    controls
                    preload="auto"
                  >
                    <source
                      src={currentService.serviceIntroducingVideo}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <picture>
                    <img
                      src={currentService?.image}
                      alt={`Imagen del curso "${currentService?.title}"`}
                    />
                  </picture>
                )}
              </div>
            </div>
          </section>
          <section className="service-work_modality">
            <div className="service-work_modality__inner">
              <Typography as="h2" variant="h2" color="black">
                Nuestras Modalidades de Trabajo
              </Typography>

              <motion.div
                className="service-work_modality__wrapper"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Swiper
                  slidesPerView={1}
                  centeredSlides={false}
                  spaceBetween={20}
                  grabCursor={true}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="w-full px-2 py-6"
                  breakpoints={{
                    1921: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    1920: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                  }}
                >
                  {currentService && currentService.modules
                    ? currentService.modules.map((modality) => (
                        <SwiperSlide
                          className="flex h-[450px] overflow-hidden"
                          key={modality._key}
                        >
                          <article className="service__card overflow-y-scroll">
                            <Typography
                              as="h3"
                              variant="h3"
                              color="black"
                              className="font-medium"
                            >
                              {modality.title}
                            </Typography>
                            <Typography as="p" variant="p" color="darkGray">
                              {modality.description}
                            </Typography>
                          </article>
                        </SwiperSlide>
                      ))
                    : ""}
                </Swiper>

                <div className="text-center flex items-center justify-center gap-4">
                  <button
                    aria-label="Botón Anterior"
                    className="swiper-button-prev"
                  >
                    <BsArrowLeft size={44} className="text-white" />
                  </button>
                  <button
                    aria-label="Botón Siguiente"
                    className="swiper-button-next"
                  >
                    <BsArrowRight size={44} className="text-white" />
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
          <section className="service-benefits">
            <div className="service-benefits__inner">
              <Typography as="h2" variant="h2" color="white">
                Beneficios
              </Typography>

              <ul role="list" className="gap-5 flex flex-col py-10">
                {currentService && currentService.benefits
                  ? currentService.benefits.map((benefit, benefitIdx) => (
                      <motion.li
                        key={benefit._key}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: benefitIdx * 0.1 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <article className="service__card">
                          <Typography as="h3" variant="h3" color="black">
                            {benefit.title}
                          </Typography>
                          <Typography as="p" variant="p" color="darkGray">
                            {benefit.description}
                          </Typography>
                        </article>
                      </motion.li>
                    ))
                  : ""}
              </ul>
            </div>
          </section>
          <section className="service-contact">
            <div className="service-contact__inner">
              <motion.article
                className="service__card"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Typography as="h3" variant="h3" color="black">
                  ¡Reserva una Entrevista!
                </Typography>
                <Typography as="p" variant="p" color="darkGray">
                  Es tu oportunidad para conectar directamente con nuestros
                  expertos en diseño gráfico. Durante esta sesión personalizada,
                  discutiremos tus necesidades específicas y exploraremos cómo
                  nuestros servicios pueden ayudarte a alcanzar tus objetivos
                  visuales y de marca. Asegura tu lugar hoy y da el primer paso
                  hacia la transformación visual de tu proyecto.
                </Typography>

                <a
                  href={`${currentService?.calendlyLink}`}
                  className="flex items-center gap-2 mt-5 font-semibold underline"
                  aria-label="Reservación de Entrevista"
                >
                  {" "}
                  Reserva en Calendly <LinkIcon size={24} />
                </a>
              </motion.article>

              <motion.article
                className="service__card"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Typography as="h3" variant="h3" color="black">
                  ¿Tenés Alguna Consulta?
                </Typography>
                <Typography as="p" variant="p" color="darkGray">
                  Estamos acá para ayudarte. Si tenés preguntas sobre nuestros
                  servicios o necesitas asesoramiento específico para tu
                  proyecto, no dudes en contactarnos. Nuestro equipo está listo
                  para ofrecerte las respuestas y la orientación que necesitas
                  para avanzar con confianza.
                </Typography>

                <a
                  href={`mailto:`}
                  className="flex items-center gap-2 mt-5 font-semibold underline"
                  aria-label="Reservación de Entrevista"
                >
                  {" "}
                  Contactame por Email <LinkIcon size={24} />
                </a>
              </motion.article>

              <motion.div
                className="farewell-card"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Typography as="h3" variant="h3" color="white">
                  ¡Esperamos verte pronto!
                </Typography>

                <picture className="flex items-center justify-center mt-5">
                  <img
                    src={PersonalAvatar}
                    alt="Imagen de Avatar Personal"
                    className="w-3/4 h-auto object-contain"
                  />
                </picture>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ServiceDetails;
