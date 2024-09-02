import { lazy } from "react";
import {
  Menu,
  NotFound,
  Footer,
  ServerError,
  InitialTransition,
  Loader,
  SocialMediaContainer,
  Transition,
} from "./components";
import { useSanity } from "./hooks/useSanity";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Home = lazy(() => import("./containers/home/Home"));
const CourseDetail = lazy(() =>
  import("./containers/courses/course-details/CourseDetails")
);
const ServiceDetail = lazy(() =>
  import("./containers/services/service-details/ServiceDetails")
);
import "./App.css";
import "./lib/helpers";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/cursos/:slug", element: <CourseDetail /> },
  { path: "/servicios/:slug", element: <ServiceDetail /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  const { isLoading, fetchError } = useSanity();
  const location = useLocation();

  return (
    <>
      <InitialTransition />
      {fetchError ? (
        <ServerError />
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Menu />
              <SocialMediaContainer />
              <main className="body-container">
                <AnimatePresence mode="wait">
                  <motion.div key={location.pathname} className="h-full">
                    <Transition />
                    <Routes location={location} key={location.pathname}>
                      {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          element={route.element}
                        />
                      ))}
                    </Routes>
                  </motion.div>
                </AnimatePresence>
              </main>
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
