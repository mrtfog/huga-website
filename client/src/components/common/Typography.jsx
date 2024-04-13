import React from "react";

const variantClasses = {
  h1: "lg:text-5xl font-bold xs:text-2xl sm:text-2xl",
  h2: "text-4xl font-semibold xs:text-xl sm:text-xl",
  h3: "text-xl font-medium",
  large: "xs:text-lg sm:text-lg lg:text-xl",
  medium: "xs:text-md sm:text-md lg:text-lg",
  small: "xs:text-sm sm:text-sm lg:text-md",
  xsmall: "xs:text-xs sm:text-xs lg:text-sm",
};

const colorClasses = {
  white: "text-[#F6EEEA]",
  black: "text-[#242526]",
  lightGray: "text-[#F6EEEA]/90",
  darkGray: "text-[#242526]/90",
  brown: "text-[#813816]",
};

const Typography = ({
  as: Tag = "span",
  variant,
  color,
  className = "",
  ...props
}) => {
  const variantClass = variantClasses[variant] || "";
  const colorClass = colorClasses[color] || "";
  const classes = `${variantClass} ${colorClass} ${className}`.trim();

  const content =
    typeof props.children === "string"
      ? props.children.split("\n").map((line, index, array) => (
          <React.Fragment key={index}>
            {React.createElement(Tag, { className: classes, ...props }, line)}
            {index < array.length - 1 && <br />}{" "}
            {/* Agrega <br /> entre líneas excepto después de la última */}
          </React.Fragment>
        ))
      : React.createElement(
          Tag,
          { className: classes, ...props },
          props.children
        );

  return <>{content}</>;
};

export default Typography;
