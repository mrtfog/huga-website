import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../api/SanityClient";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardItem = ({ workPlan, workIdx }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: workIdx * 0.1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${workPlan?.image})` }}
      className="w-full h-96 bg-black bg-center bg-cover bg-no-repeat rounded-3xl overflow-hidden p-5 overlay"
    >
      <Link
        to={`/planes-de-trabajo/${workPlan.slug.current}`}
        className="w-full h-full flex flex-col justify-end"
      >
        <h3 className="text-white text-3xl font-bold z-10">{workPlan.title}</h3>
        <p className="text-gray-100 text-lg z-10">
          {workPlan.shortDescription}
        </p>
      </Link>
    </motion.article>
  );
};

const WorkPlan = () => {
  const [workPlans, setWorkPlans] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const query = `*[_type == 'workPlan']{
          ...,
          "image": image.asset->url,
          "includedServices": includedServices[]->{
            ...,
          }
        }`;
        const result = await client.fetch(query);

        if (result) setWorkPlans(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    return () => setWorkPlans(null);
  }, []);

  return (
    <section className="w-11/12 h-max mx-auto flex flex-col justify-center items-center py-10">
      <h2 className="font-bold text-6xl">Planes de trabajo</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-10 gap-5">
        {workPlans && workPlans.length
          ? workPlans.map((workPlan, workIdx) => (
              <CardItem
                key={workPlan._id}
                workIdx={workIdx}
                workPlan={workPlan}
              />
            ))
          : ""}
      </div>
    </section>
  );
};

export default WorkPlan;
