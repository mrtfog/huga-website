import React from "react";
import { Typography } from "../../../../components";

const About = ({ plan }) => {
  return (
    <section className="h-max z-10 px-5 lg:px-20 py-20 flex flex-col gap-20">
      <div>
        <Typography as="h2" variant="h1" color="black">
          Acerca de "{plan?.title}"
        </Typography>
        <Typography as="p" variant="medium" color="darkGray" className="mt-3">
          {plan?.description}
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-5">
        <div className="bg-white rounded-xl p-5 border border-gray-300">
          <Typography as="h2" variant="h2" color="black">
            Público Objetivo
          </Typography>
          <Typography as="p" variant="medium" color="darkGray">
            {plan?.objectivePublic}
          </Typography>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-300">
          <Typography as="h2" variant="h2" color="black">
            Objetivos
          </Typography>
          <Typography as="p" variant="medium" color="darkGray">
            {plan?.objective}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default About;
