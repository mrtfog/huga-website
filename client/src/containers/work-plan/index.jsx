import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { Helmet } from "react-helmet";
import { client } from "../../api/SanityClient";
import { Hero, About, WorkModality } from "./components";

const WorkPlanPage = () => {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [planNotFound, setPlanNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const query = `*[_type == "workPlan" && slug.current == $slug][0]{
      ...,
      "image": image.asset->url,
    }`;

    client
      .fetch(query, { slug: slug })
      .then((data) => {
        if (data) {
          setCurrentPlan(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setPlanNotFound(true);
        console.error("Error fetching course:", error);
      });

    return () => {
      setCurrentPlan(null);
    };
  }, [slug]);

  console.log(currentPlan);

  return (
    <>
      <Helmet>
        <title>{`Hüga | ${currentPlan?.title || ""}`}</title>
        <meta name="description" content={currentPlan?.description} />
        <meta
          name="keywords"
          content="diseño de indumentaria, diseño gráfico, branding, identidad de marca, redes sociales, producto, ilustración, fotografía de moda, estampas, fichas técnicas, logotipos"
        />
        <meta property="og:title" content={`Hüga | ${currentPlan?.title}`} />
        <meta property="og:description" content={currentPlan?.description} />
        <meta
          property="og:site_name"
          content={`Hüga | ${currentPlan?.title || ""}`}
        ></meta>
      </Helmet>
      {planNotFound ? (
        "Plan no encontrado"
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Hero plan={currentPlan} />
              <About plan={currentPlan} />
              <WorkModality plan={currentPlan} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default WorkPlanPage;
