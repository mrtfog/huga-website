import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../assets/styles/components/blog.module.css";
import { useRef } from "react";

const Blog = ({ sectionData }) => {
  if (!sectionData) return null;

  const swiperRef = useRef(null);

  return (
    <section className={styles.container}>
      <h2 className="font-bold text-6xl mb-10 text-center">
        Conocé nuestro blog
      </h2>

      {sectionData.blogs && sectionData.blogs.length ? (
        <>
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
            {sectionData.blogs.map((blog) => (
              <SwiperSlide key={blog._id}>
                <article className={styles.blogCard}>
                  <figure>
                    <img
                      src={blog.featuredImage}
                      alt={`Imágen de "${blog.title}"`}
                      loading="lazy"
                    />
                  </figure>

                  <div className={styles.content}>
                    <div className="flex flex-col gap-1">
                      <span className="bg-violet-300 rounded-full px-2 text-md w-max">
                        {blog.category?.title}
                      </span>

                      <div>
                        <h3 className="font-bold text-2xl">{blog.title}</h3>
                        <p className="text-gray-700 mt-1">{blog.excerpt}</p>
                      </div>
                    </div>

                    <footer>
                      <Link className="btn" to={`/blog/${blog.slug.current}`}>
                        Leer Más
                      </Link>
                    </footer>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center mt-4 flex items-center justify-center gap-4 py-4">
            <button
              aria-label="Previous Slide Button"
              className="swiper-button-prev"
            >
              <BsArrowLeft size={44} className="text-black" />
            </button>
            <button
              aria-label="Next Slide Button"
              className="swiper-button-next"
            >
              <BsArrowRight size={44} className="text-black" />
            </button>
          </div>
        </>
      ) : (
        <p>No hay entradas en el blog disponibles.</p>
      )}
    </section>
  );
};

export default Blog;
