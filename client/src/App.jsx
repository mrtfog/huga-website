import "./App.css"
import "./helpers";
import { Menu } from "./components";
import { Home } from "./containers";

const menuItems = ["Inicio", "Cursos", "Proyectos", "Servicios" , "Contacto"];

function App() {
  return (
    <>
      <Menu menuItems={menuItems} />
      <main className="body-container">
        <Home />
      </main>
    </>
  );
}

export default App