import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  Footer,
  InitialTransition,
  Loader,
  Menu,
  NotFound,
  ServerError,
  SocialMediaContainer,
  Transition,
} from "./components";
import { useSanity } from "./hooks/useSanity";
import "./lib/helpers";

const Home = lazy(() => import("./containers/home/Home"));
const CourseDetail = lazy(() =>
  import("./containers/courses/course-details/CourseDetails")
);
const BlogDetailsPage = lazy(() => import("./containers/blog/blog-page/index"));
const WorkPlanPage = lazy(() => import("./containers/work-plan/index"));
const ServiceDetail = lazy(() =>
  import("./containers/services/service-details/ServiceDetails")
);

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
                  <motion.div key={location.pathname} className="h-full]">
                    <Transition />
                    <Suspense fallback={<Loader />}>
                      <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route
                          path="/cursos/:slug"
                          element={<CourseDetail />}
                        />
                        <Route
                          path="/planes-de-trabajo/:slug"
                          element={<WorkPlanPage />}
                        />
                        <Route
                          path="/servicios/:slug"
                          element={<ServiceDetail />}
                        />
                        <Route
                          path="/blog/:slug"
                          element={<BlogDetailsPage />}
                        />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
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
