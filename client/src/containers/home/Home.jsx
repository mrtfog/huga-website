import {
  Projects,
  Courses,
  Services,
  WorkPlan,
  Header,
  Contact,
  Blog,
} from "../../components";
import { Fragment, useEffect } from "react";
import { useSanity } from "../../hooks/useSanity";
import { Helmet } from "react-helmet";

const Home = () => {
  const { homeContent, getHome } = useSanity();

  useEffect(() => {
    if (!homeContent) getHome();
  });

  return (
    <>
      <Helmet>
        <title>Hüga | Estudio de diseño integral</title>
        <meta
          name="description"
          content="Estudio de diseño integral, enfocado en creación de marcas únicas. Servicios de diseño de indumentaria/gráfico, cursos, ilustraciones, branding, packaging."
        />
        <meta
          name="keywords"
          content="diseño de indumentaria, diseño gráfico, branding, identidad de marca, redes sociales, producto, ilustración, fotografía de moda, estampas, fichas técnicas, logotipos"
        />
        <meta property="og:title" content="Hüga | Estudio de diseño integral" />
        <meta
          property="og:description"
          content="Estudio de diseño integral, enfocado en creación de marcas únicas. Servicios de diseño de indumentaria/gráfico, cursos, ilustraciones, branding, packaging."
        />
        <meta
          property="og:site_name"
          content="Hüga | Estudio de diseño integral"
        ></meta>
      </Helmet>
      {homeContent && homeContent.length
        ? homeContent.map((section) => (
            <Fragment key={section.type}>
              {section.type === "hero" && <Header sectionData={section} />}
              {section.type === "courses" && <Courses sectionData={section} />}
              {section.type === "portfolio" && (
                <Projects sectionData={section} />
              )}
              {section.type === "services" && (
                <Services sectionData={section} />
              )}
              {section.type === "work-plan" && (
                <WorkPlan sectionData={section} />
              )}
              {section.type === "blog" && <Blog sectionData={section} />}
              {section.type === "contact" && <Contact sectionData={section} />}
            </Fragment>
          ))
        : ""}
    </>
  );
};

export default Home;
