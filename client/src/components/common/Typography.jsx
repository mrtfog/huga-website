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
  white: "text-[#f6f6f6]",
  black: "text-[#0a0a0a]",
  lightGray: "text-[#e5e5e5]",
  darkGray: "text-[#363738]",
  brown: "text-[#813816]",
  violet: "text-[#650666]",
  lightViolet: "text-[#731b74]",
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

  return React.createElement(
    Tag,
    { className: classes, ...props },
    props.children
  );
};

export default Typography;
