import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { Helmet } from "react-helmet";
import { client } from "../../api/SanityClient";
import { Hero, About, WorkModality, MorePlans } from "./components";

const WorkPlanPage = () => {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [otherPlans, setOtherPlans] = useState([]);
  const [planNotFound, setPlanNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const currentPlanQuery = `*[_type == "workPlan" && slug.current == $slug][0]{
      ...,
      "image": image.asset->url,
      "video": video.asset->url,
    }`;

    const otherPlansQuery = `*[_type == "workPlan" && slug.current != $slug]{
      ...,
      "image": image.asset->url,
    }`;

    Promise.all([
      client.fetch(currentPlanQuery, { slug: slug }),
      client.fetch(otherPlansQuery, { slug: slug }),
    ])
      .then(([currentPlanData, otherPlansData]) => {
        if (currentPlanData) {
          setCurrentPlan(currentPlanData);
          setOtherPlans(otherPlansData);
        } else {
          setPlanNotFound(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setPlanNotFound(true);
        console.error("Error fetching plans:", error);
        setIsLoading(false);
      });

    return () => {
      setCurrentPlan(null);
      setOtherPlans([]);
    };
  }, [slug]);

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
              <MorePlans plans={otherPlans} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default WorkPlanPage;
