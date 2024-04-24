import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#F6EEEA] text-[#813816]">
      <div className="text-9xl font-bold">404</div>
      <div className="text-3xl font-medium">Página no encontrada</div>
      <p className="text-[#813816]/80 mt-3 text-xl font-normal">
        Lo siento, no pudimos encontrar la página que estás buscando :(
      </p>
      <div className="flex space-x-4 mt-6">
        <Link
          to={"/"}
          className="flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#D57C8C]/80 hover:bg-[#D57C8C]"
        >
          <BsHouse className="mr-2" /> Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
