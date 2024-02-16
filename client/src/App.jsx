import { Menu, NotFound, ServerError, InitialTransition } from "./components";
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
            <div className="absolute z-50 flex items-center justify-center w-full bg-[#ECC03C]">
              <svg className="absolute z-50 flex">
                <pattern
                  id="pattern"
                  patternUnits="userSpaceOnUse"
                  width={750}
                  height={800}
                  className="text-[#D57C8C]"
                >
                  <rect className="w-full h-full fill-current" />
                  <rect className="w-full h-full text-white fill-current" />
                </pattern>
                <text
                  className="text-7xl font-bold"
                  textAnchor="middle"
                  x="50%"
                  y="50%"
                  style={{ fill: "url(#pattern)" }}
                >
                  HUGA
                </text>
              </svg>
            </div>
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
