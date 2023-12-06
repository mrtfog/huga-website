import { ContactInput } from "../common/ContactInput";
import { ContactAvatar } from "../../constants/images";
import emailjs from '@emailjs/browser';
import "../../assets/styles/components/contact.css"

const Contact = () => {

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
    <section className="contact" id ="Contacto">
      <img id = "contact-avatar" src = {ContactAvatar} alt = {"avatar"} />
      <h2>Contacto</h2>
      <form onSubmit={sendMessage}>
        <ContactInput name = "name" type="text" placeholder="Tu nombre"></ContactInput>
        <ContactInput name = "email" type="email" placeholder="Tu email"></ContactInput>
        <ContactInput name = "message" type="textArea" placeholder="Tu mensaje"></ContactInput>
        <input className = 'contact-btn' type = "submit" value = "Enviar mensaje"></input>
      </form>
    </section>
  );
}

export default Contact