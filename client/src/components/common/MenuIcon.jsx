import React from "react";

export function MenuIcon(props) {
  return (
    <a href={props.url}>
    <img
      alt={props.icon}
      className="menu-icon"
      src={props.icon}
    ></img>
    </a>
  );
}
