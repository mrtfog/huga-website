import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSanity } from "../../../hooks/useSanity";
import { Helmet } from "react-helmet";
import { Typography } from "../../../components";
import { BsCheck } from "react-icons/bs";
import { PersonalAvatar } from "../../../lib/images";

const ServiceDetails = () => {
  window.scrollTo(0, 0);
  const [currentService, setCurrentService] = useState(null);
  const [serviceNotFound, setServiceNotFound] = useState(false);
  const { id } = useParams();
  const { services, getServices } = useSanity();

  useEffect(() => {
    if (services) {
      const findCurrentService = courses.find((course) => course._id === id);

      if (findCurrentService) {
        setCurrentService(findCurrentService);
        setServiceNotFound(false);
      } else {
        setServiceNotFound(true);
      }
    } else {
      getServices();
    }
  }, [id, services, getServices]);

  return (
    <>
      <Helmet>
        <title>{`Hüga | ${currentService?.title}`}</title>
        <meta name="description" content={currentService?.description} />
        <meta
          name="keywords"
          content="diseño de indumentaria, diseño gráfico, branding, identidad de marca, redes sociales, producto, ilustración, fotografía de moda, estampas, fichas técnicas, logotipos"
        />
        <meta property="og:title" content={`Hüga | ${currentService?.title}`} />
        <meta property="og:description" content={currentService?.description} />
        <meta
          property="og:site_name"
          content={`Hüga | ${currentService?.title}`}
        ></meta>
      </Helmet>
      {serviceNotFound ? (
        " Servicio No Encontrado"
      ) : (
        <>
          <section className="service-hero">hero</section>
          <section className="service-work_modality">Work Modality</section>
        </>
      )}
    </>
  );
};

export default ServiceDetails;
