import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSanity } from "../../../hooks/useSanity";
import Typography from "../../../components/common/Typography";
import { BsCheck } from "react-icons/bs";
import PrincingCard from "./components/PrincingCard";
import Timeline from "./components/Timeline";
import { PersonalAvatar } from "../../../lib/images";
import { Helmet } from "react-helmet";
import "../../../assets/styles/components/courses/CourseDetail.css";

const CourseDetails = () => {
  window.scrollTo(0, 0);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [courseNotFound, setCourseNotFound] = useState(false);
  const { id } = useParams();
  const { courses, getCourses } = useSanity();

  useEffect(() => {
    if (courses) {
      const findCurrentCourse = courses.find((course) => course._id === id);

      if (findCurrentCourse) {
        setCurrentCourse(findCurrentCourse);
        setCourseNotFound(false);
      } else {
        setCourseNotFound(true);
      }
    } else {
      getCourses();
    }
  }, [id, courses, getCourses]);

  return (
    <>
      <Helmet>
        <title>{`Hüga | ${currentCourse?.title}`}</title>
        <meta name="description" content={currentCourse?.description} />
        <meta
          name="keywords"
          content="diseño de indumentaria, diseño gráfico, branding, identidad de marca, redes sociales, producto, ilustración, fotografía de moda, estampas, fichas técnicas, logotipos"
        />
        <meta property="og:title" content={`Hüga | ${currentCourse?.title}`} />
        <meta property="og:description" content={currentCourse?.description} />
        <meta
          property="og:site_name"
          content={`Hüga | ${currentCourse?.title}`}
        ></meta>
      </Helmet>
      {courseNotFound ? (
        "Curso no encontrado"
      ) : (
        <>
          <section className="course-hero">
            <div className="course-hero__description">
              <Typography as="h1" variant="h1" color="black">
                {currentCourse?.title}
              </Typography>
              <Typography as="p" variant="small" color="darkGray">
                {currentCourse?.description}
              </Typography>
            </div>
            <div className="course-hero__video">
              {currentCourse && currentCourse.courseIntroducingVideo ? (
                <video
                  loop
                  poster={currentCourse?.image}
                  controls
                  preload="auto"
                >
                  <source
                    src={currentCourse?.courseIntroducingVideo}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <picture>
                  <img
                    src={currentCourse?.image}
                    alt={`Imagen del curso "${currentCourse?.title}"`}
                  />
                </picture>
              )}
            </div>
          </section>
          <section className="course-topics">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute top-0 lg:-top-24 left-0 z-0 pointer-events-none"
            >
              <path
                fill="#F6EEEA"
                fillOpacity="1"
                d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>

            <div className="course-topics__wrapper">
              <div className="course-topics__description">
                <Typography as="h2" variant="h2" color="white">
                  Tópicos
                </Typography>
                <Typography as="p" variant="small" color="lightGray">
                  {currentCourse?.topics}
                </Typography>
              </div>
            </div>

            <div className="course-topics__timeline">
              <div className="course-topics__timeline_wrapper">
                <Timeline currentCourse={currentCourse} />
              </div>
            </div>
          </section>
          <section className="course-objectives">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute top-0 left-0 z-0 pointer-events-none"
            >
              <path
                fill="#ECC03C"
                fillOpacity="1"
                d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>

            <div className="course-objectives__wrapper">
              <div className="course-objectives__objectives">
                <Typography as="h2" variant="h2" color="white">
                  Objetivos
                </Typography>
                <Typography as="p" variant="small" color="lightGray">
                  {currentCourse?.goals}
                </Typography>
              </div>

              <div className="course-objectives__target_audience">
                <Typography as="h2" variant="h2" color="white">
                  Público Objetivo
                </Typography>
                <Typography as="p" variant="small" color="lightGray">
                  {currentCourse?.targetAudience}
                </Typography>
              </div>
            </div>
          </section>

          <section className="course-payments">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute top-0 left-0 z-0 pointer-events-none"
            >
              <path
                fill="#D57C8C"
                fillOpacity="1"
                d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <div className="course-payments__wrapper">
              <div className="course-payments__payments_data">
                <div className="course-payments__payments_description">
                  <Typography as="h2" variant="h2" color="black">
                    Nuestras Modalidades de Cursada
                  </Typography>
                  <Typography as="p" variant="small" color="darkGray">
                    Elige tu cursada con la modalidad que mejor se ajuste a tus
                    necesidades.
                  </Typography>
                  <Typography as="p" variant="small" color="darkGray">
                    La matrícula es un pago único a realizar en cada inicio de
                    año. Es equivalente a la inscripción para todos los cursos
                    que el alumno decida realizar durante el mismo.
                  </Typography>
                </div>
                <div className="course-payments__payments_pricing">
                  <div className="pricing_card">
                    <Typography as="h3" variant="h3" color="black">
                      Modalidad Sincrónica
                    </Typography>

                    <ul
                      className="my-8 pricing_card__benefits_list"
                      role="list"
                    >
                      <li className="flex items-start gap-2">
                        <BsCheck className="mt-1" size={20} />
                        <Typography as="p" variant="small" color="darkGray">
                          Grabación de las clases y consultas en vivo
                        </Typography>
                      </li>
                      <li className="flex items-start gap-2 mt-2">
                        <BsCheck className="mt-1" size={20} />
                        <Typography as="p" variant="small" color="darkGray">
                          Preentregas y Proyecto Final
                        </Typography>
                      </li>
                      <li className="flex items-start gap-2 mt-2">
                        <BsCheck className="mt-1" size={20} />
                        <Typography as="p" variant="small" color="darkGray">
                          Archivos adjuntos disponibles
                        </Typography>
                      </li>
                    </ul>

                    <div className="bg-[#242526] h-[1px] w-full"></div>

                    <div className="pricing_card__price">
                      <Typography as="p" variant="xsmall" color="darkGray">
                        Matrícula Anual ${currentCourse?.enrollment} + Cuota
                        Mensual ${currentCourse?.price}
                      </Typography>

                      <Typography as="h3" variant="h3" color="darkGray">
                        Finales $
                        {currentCourse?.enrollment + currentCourse?.price}
                      </Typography>

                      <a
                        href={currentCourse?.paymentUrl}
                        className="btn w-full"
                      >
                        Inscribirme Ahora
                      </a>
                    </div>
                  </div>

                  {currentCourse && currentCourse.asyncCourseAvailability ? (
                    <PrincingCard currentCourse={currentCourse} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="course-promotion-hook">
            <div className="course-promotion-hook__wrapper">
              <div className="course-promotion-hook__container">
                <div className="course-promotion-hook__description">
                  <Typography as="h2" variant="h2" color="black">
                    Porque nos interesa tu progreso
                  </Typography>
                  <Typography as="p" variant="small" color="darkGray">
                    Todos nuestros cursos finalizan con un TP Final integrador a
                    través del cuál el alumno podrá evaluar sus habilidades
                    adquiridas y recibir una certificación de cursada y
                    aprobación del mismo. Una vez finalizado el curso, el
                    estudio ofrece una sesión de coaching profesional y
                    asesoramiento gratuito para aquellos alumnos que deseen
                    iniciar sus carreras en el rubro ya sea para la búsqueda
                    laboral o el desarrollo de trabajos independientes, así como
                    también la creación de sus propias marcas.
                  </Typography>
                  <Typography as="p" variant="small" color="darkGray">
                    ¡Alentamos a que todos aquellos que se interesen por vivir
                    de la moda puedan hacerlo y crear su propio camino
                    profesional!
                  </Typography>
                </div>

                <div className="farewell-card">
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
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CourseDetails;
