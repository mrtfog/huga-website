import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Typography } from "../../../../components";

const MorePlans = ({ plans }) => {
  console.log(plans);
  return (
    <section className="px-5 lg:px-20 py-20">
      <div className="mb-10">
        <Typography as="h2" variant="h1" color="black">
          Descubrí más Planes!
        </Typography>
      </div>
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
        {plans && plans.length
          ? plans.map((workPlan, index) => (
              <SwiperSlide key={index}>
                <article
                  style={{ backgroundImage: `url(${workPlan?.image})` }}
                  className="w-full h-96 bg-black bg-center bg-cover bg-no-repeat rounded-3xl overflow-hidden p-5 overlay"
                >
                  <Link
                    to={`/planes-de-trabajo/${workPlan.slug.current}`}
                    className="w-full h-full flex flex-col justify-end"
                  >
                    <h3 className="text-white text-3xl font-bold z-10">
                      {workPlan.title}
                    </h3>
                    <p className="text-gray-100 text-lg z-10">
                      {workPlan.shortDescription}
                    </p>
                  </Link>
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
        <button aria-label="Next Slide Button" className="swiper-button-next">
          <BsArrowRight size={44} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default MorePlans;
