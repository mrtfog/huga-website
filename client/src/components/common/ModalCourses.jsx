import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const showModalOff = (event) => {
  let id = 0;
  (event.target.nodeName == "path") ? id = (event.target.parentNode.getAttribute('buttonId')) : id = (event.target.getAttribute('buttonId'));
  const modal = document.getElementById(id);
  modal.classList.toggle('enabled');
};

export const ModalCourses = ({ data: { title, description, price, topics, id, url, available } }) => {
  return (
    <div className="modal-courses disabled" id={id}>
      <div className="modal-container">
        <div className = "modal-bar">
          <h2>{title}</h2>
          <IoCloseCircle 
            buttonId = { id } 
            onClick = { showModalOff }
          />
        </div>
        <p>{description}</p>
        <p>{topics}</p>
        <h3>Precio: {price}</h3>
        {
        (available) ? <a href = { url } className="btn">Comprar</a> : <a href = '#' className="btn-no">No disponible</a> 
        } 
      </div>
    </div>
  );
};
