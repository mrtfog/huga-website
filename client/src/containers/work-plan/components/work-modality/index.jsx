import React from "react";
import {
  Typography,
  VerticalTimeline,
  WaveSeparator,
} from "../../../../components";

const WorkModality = ({ plan }) => {
  return (
    <section className="h-max bg-orange-color z-10 px-5 lg:px-20 py-20 lg:pt-52 flex flex-col gap-10 relative">
      <WaveSeparator color="#d57c8c" />

      <div className="mt-20">
        <Typography as="h2" variant="h1" color="black">
          Modalidad de trabajo
        </Typography>
        <Typography as="p" variant="medium" color="darkGray" className="mt-3">
          {plan?.workModality}
        </Typography>
      </div>

      <div>
        {plan && plan.workPlan ? (
          <VerticalTimeline items={plan.workPlan} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default WorkModality;
