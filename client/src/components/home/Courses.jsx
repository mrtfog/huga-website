import { useRef, useEffect } from "react";
import { CoursesAvatar } from "../../lib/images.js";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSanity } from "../../hooks/useSanity.js";
import "swiper/css";
import "swiper/css/pagination";

const Courses = ({ sectionData }) => {
  const { setCourses } = useSanity();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (sectionData && sectionData.courses) setCourses(sectionData.courses);
  }, [sectionData, setCourses]);

  return (
    <section className="courses" id="Cursos">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#D57C8C"
          fillOpacity="1"
          d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="course-container">
        <div id="courses-avatar">
          <img src={CoursesAvatar} alt={"courses-avatar"}></img>
        </div>

        <div className="course-info">
          <h2>Visitá mis cursos!</h2>
          <div className="course-box-container">
            <Swiper
              ref={swiperRef}
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
              className="w-full px-2 py-6 min-h-max"
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
              {sectionData.courses && sectionData.courses.length
                ? sectionData.courses.map((course, index) => (
                    <SwiperSlide key={index}>
                      <article className="course-card">
                        <div>
                          <div className="course-image">
                            <picture>
                              <img src={course.imageUrl} alt={course.title} />
                            </picture>
                          </div>

                          <div className="course-title">
                            <h3>{course.title}</h3>
                            <div className="course-tags-container">
                              <span className="course-tag">
                                {course.duration}
                              </span>
                              <span className="course-duration">
                                Inicio: {course.start}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="course-btn">
                          {course.available ? (
                            <Link
                              name={course.id}
                              to={`/cursos/${course._id}`}
                              className={`btn ${
                                course.available ? "btn" : "btn-no"
                              }`}
                              disabled={course.available ? false : true}
                            >
                              Ver Más
                            </Link>
                          ) : (
                            <button
                              name={course.id}
                              // onClick={() => showModalCourse(course)}
                              className={`btn ${
                                course.available ? "btn" : "btn-no"
                              }`}
                              disabled={course.available ? false : true}
                            >
                              No Disponible
                            </button>
                          )}
                        </div>
                      </article>
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>

            <div className="text-center mt-4 flex items-center justify-center gap-4 py-4">
              <button
                aria-label="Previous Slide Button"
                className="swiper-button-prev"
              >
                <BsArrowLeft size={44} className="text-white" />
              </button>
              <button
                aria-label="Next Slide Button"
                className="swiper-button-next"
              >
                <BsArrowRight size={44} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
