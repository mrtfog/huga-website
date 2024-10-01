import React from "react";
import { Typography } from "../../../../components";

const Hero = ({ plan }) => {
  return (
    <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 max-h-max z-10 px-5 lg:px-20 gap-5 place-content-center">
      <div className="w-full flex flex-col justify-center gap-3 mt-28 lg:mt-0">
        <Typography as="h1" variant="h1" color="black">
          {plan?.title}
        </Typography>
        <Typography as="p" variant="medium" color="darkGray">
          {plan?.shortDescription}
        </Typography>
      </div>
      <div className="w-full lg:h-2/3 my-auto bg-[#d0ccd6] rounded-lg overflow-hidden transition-all duration-500 ease-out hover:rounded-[2.5rem]">
        <picture>
          <img
            src={plan?.image}
            alt={`Imagen del plan de trabajo "${plan?.title}"`}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
