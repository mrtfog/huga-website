import { Menu, NotFound, ServerError, InitialTransition, Loader } from "./components";
import { useSanity } from "./lib/useSanity";
import { Home, Courses, Services } from "./containers";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./lib/helpers";
import { AnimatePresence } from "framer-motion";

const menuItems = ["Inicio", "Cursos", "Proyectos", "Servicios", "Contacto"];

const routes = [
  { path: "/", element: <Home /> },
  { path: "/cursos", element: <Courses /> },
  { path: "/servicios", element: <Services /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  const { isLoading, fetchError } = useSanity();

  return (
    <>
      {fetchError ? (
        <ServerError />
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <InitialTransition />
              <Menu menuItems={menuItems} />
              <main className="body-container">
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                </AnimatePresence>
              </main>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
