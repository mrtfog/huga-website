import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSanity } from "../../../hooks/useSanity";
import { Helmet } from "react-helmet";
import { Typography } from "../../../components";
import { BsCheck } from "react-icons/bs";
import { PersonalAvatar } from "../../../lib/images";
import "../../../assets/styles/components/services/ServiceDetails.css";

const ServiceDetails = () => {
  window.scrollTo(0, 0);
  const [currentService, setCurrentService] = useState(null);
  const [serviceNotFound, setServiceNotFound] = useState(false);
  const { id } = useParams();
  const { services, getServices } = useSanity();

  useEffect(() => {
    if (services) {
      const findCurrentService = services.find((service) => service._id === id);

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

  console.log(currentService);
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
          <section className="service-hero">
            <div className="service-hero__inner">
              <div className="service-hero__description">
                <Typography as="h1" variant="h1" color="white">
                  {currentService?.title}
                </Typography>
                <Typography as="p" variant="small" color="lightGray">
                  {currentService?.description}
                </Typography>
              </div>
              <div className="service-hero__video">
                {currentService && currentService.serviceIntroducingVideo ? (
                  <video
                    loop
                    poster={currentService?.image}
                    controls
                    preload="auto"
                  >
                    <source
                      src={currentService?.serviceIntroducingVideo}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <picture>
                    <img
                      src={currentService?.image}
                      alt={`Imagen del curso "${currentService?.title}"`}
                    />
                  </picture>
                )}
              </div>
            </div>
          </section>
          <section className="service-work_modality">
            <div className="service-work_modality__inner">
              <Typography as="h2" variant="h2" color="black">
                Nuestras Modalidades de Trabajo
              </Typography>

              <div className="service-work_modality__wrapper">
                {currentService && currentService.modules.length
                  ? currentService.modules.map((modality) => (
                      <article
                        key={modality._id}
                        className="service-work_modality__card"
                      >
                        <Typography as="h3" variant="h3" color="black">
                          {modality.title}
                        </Typography>
                        <Typography as="p" variant="p" color="darkGray">
                          {modality.description}
                        </Typography>
                      </article>
                    ))
                  : ""}
              </div>
            </div>
          </section>
          <section className="service-benefits">
            <div className="service-benefits__inner">
              <Typography as="h2" variant="h2" color="white">
                Beneficios
              </Typography>

              <ul role="list">
                {currentService && currentService.benefits
                  ? currentService.benefits.map((benefit) => (
                      <article key={benefit._id}>
                        <Typography as="h3" variant="h3" color="black">
                          {benefit.title}
                        </Typography>
                        <Typography as="p" variant="p" color="darkGray">
                          {benefit.description}
                        </Typography>
                      </article>
                    ))
                  : ""}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ServiceDetails;
