import React from "react";

export function ContactInput({name, type, placeholder }) {
  if (type == "text") {
    return (
      <input
        name = {name}
        type="text"
        placeholder={placeholder}
        className="contact-input"
      ></input>
    );
  } else if (type == "email") {
    return (
      <input
        name = {name}
        type="email"
        placeholder={placeholder}
        className="contact-input"
      ></input>
    );
  } else if (type == "textArea") {
    return (
      <textarea name = {name} placeholder={placeholder} className="input-textarea"></textarea>
    );
  }
}
