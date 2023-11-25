import React from "react";
import ReactDOM from "react-dom";
import { ContactInput } from "../common/ContactInput";
import avatar from '../../assets/avatars/contacto.png';
import emailjs from '@emailjs/browser';

export function Contact() {

  const sendMessage = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_01wq6ta', 'template_ousunho', e.target, 'fdISMbfmpqCeEC6Nt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact" id = "Contacto">
      <img id = "contact-avatar" src = {avatar} alt = {avatar} />
      <h2>Contact</h2>
      <form onSubmit={sendMessage}>
        <ContactInput name = "name" type="text" placeholder="Tu nombre"></ContactInput>
        <ContactInput name = "email" type="email" placeholder="Tu email"></ContactInput>
        <ContactInput name = "message" type="textArea" placeholder="Tu mensaje"></ContactInput>
        <input className = 'contact-btn' type = "submit" value = "Enviar mensaje"></input>
      </form>
    </div>
  );
}
