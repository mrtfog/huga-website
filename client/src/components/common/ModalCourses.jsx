import { useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";

export const ModalCourses = ({ course, isInView, showModal }) => {
  
  useEffect(() => {
  
    const handleClickOutside = (event) => {
      const modalContainer = document.querySelector('.modal-container');
    
      if (isInView && modalContainer && !modalContainer.contains(event.target)) {
        showModal();
      }
    };

    if (isInView) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isInView, showModal]);

  return (
    <div className={`modal-courses ${isInView ? "show-modal" : "hide-modal"}`}>
      <div className={`modal-container ${isInView ? "enabled" : "disabled"}`}>
        
        <div className = "modal-bar">
          <h2>{course?.title}</h2>
          <IoCloseCircle
            className="cursor-pointer" 
            buttonid = { course?.id } 
            onClick = { () => showModal() }
          />
        </div>

        <h3>Descripción</h3>
        <p>{course?.description}</p>
        
        <h3>Temario</h3>
        <p>{course?.topics}</p>

        <h3>Objetivos</h3>
        <p>{course?.goals}</p>

        <h3>¿A quién está dirigido?</h3>
        <p>{course?.targetAudience}</p>

        <h4>Matrícula: ${course?.enrollment}</h4>
        <h5>Precio: ${course?.price}</h5>
        {
          course?.asyncCoursePrice ? (
            <h6>Curso asincrónico: ${course?.asyncCoursePrice}</h6>
          ) : ("")
        }

        {
          course?.available ? (
              <a href = { course?.url } className="btn">Comprar</a>
            ) : (
              <a href = '#' className="btn-no">No disponible</a>
            )
        } 
      </div>
    </div>
  );
};
