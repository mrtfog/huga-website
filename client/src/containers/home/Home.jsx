import { Projects, Courses, Services, Header, Contact } from "../../components";
import { Fragment, useEffect } from "react";
import { useSanity } from "../../hooks/useSanity";

const Home = () => {
  const { homeContent, getHome } = useSanity();

  useEffect(() => {
    if (!homeContent) getHome();
  });

  return (
    <>
      {homeContent && homeContent.length
        ? homeContent.map((section) => (
            <Fragment key={section.type}>
              {section.type === "hero" && <Header sectionData={section} />}
              {section.type === "courses" && <Courses sectionData={section} />}
              {section.type === "projects" && (
                <Projects sectionData={section} />
              )}
              {section.type === "services" && (
                <Services sectionData={section} />
              )}
              {section.type === "contact" && <Contact sectionData={section} />}
            </Fragment>
          ))
        : ""}
    </>
  );
};

export default Home;
