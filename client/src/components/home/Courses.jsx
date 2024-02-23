import { useRef } from "react";
import { CoursesAvatar } from "../../lib/images.js";
import { ModalCourses } from "../common/ModalCourses.jsx";
import { coursesData } from "../../lib/constants.js";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const showModalCourse = (event) => {
  const modalCourse = document.getElementById(event.target.name);
  modalCourse.classList.toggle("enabled");
};

const Courses = () => {
  const swiperRef = useRef(null);

  return (
    <>
      {
        coursesData.map((course) => {
          return <ModalCourses id={course.id} data={course} key={course.id} />;
        })
      }
      <section className="courses" id="Cursos">
        
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
            <h2>
              Visitá mis cursos!
            </h2>
            <div className="course-box-container">
              <Swiper
              ref={swiperRef}
              slidesPerView={1}
              centeredSlides={false}
              spaceBetween={20}
              grabCursor={true}
              navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              }}
              pagination={{
                  clickable: true,
              }}
              modules={[Navigation]}
              className="w-full px-2 py-6"
              breakpoints={{
                640: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
              }}
              >
                {
                  coursesData.map((course, index) => (
                      <SwiperSlide key={index}>
                          <article className='course-card'>
                            <div className='course-image'>
                              <img 
                              src={course.image} 
                              alt={course.title}
                              />
                            </div>

                            <div className="course-title">
                              <h3>{course.title}</h3>
                            </div>

                            <div className="course-btn">
                              <button name={course.id} onClick={showModalCourse} className="btn">
                                Ver más
                              </button>
                            </div>

                          </article>
                      </SwiperSlide>
                  ))
                }
              </Swiper>

              <div className='text-center mt-4 flex items-center justify-center gap-4 py-4'>
                <button className="swiper-button-prev">
                  <BsArrowLeft size={44} className="text-white" />
                </button>
                <button className="swiper-button-next"> 
                  <BsArrowRight size={44} className="text-white" /> 
                </button>
              </div>
              
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Courses;
