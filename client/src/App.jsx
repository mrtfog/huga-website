import { lazy } from "react";
import {
  Menu,
  NotFound,
  Footer,
  ServerError,
  InitialTransition,
  Loader,
  Transition,
} from "./components";
import { useSanity } from "./hooks/useSanity";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Home = lazy(() => import("./containers/home/Home"));
const Courses = lazy(() => import("./containers/courses/Courses"));
// const Services = lazy(() => import("./containers/services/Services"));
import "./App.css";
import "./lib/helpers";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/cursos", element: <Courses /> },
  // { path: "/servicios", element: <Services /> },
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
