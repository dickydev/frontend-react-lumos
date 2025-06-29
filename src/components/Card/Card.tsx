import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  const baseClasses = "bg-white rounded-xl shadow-lg overflow-hidden";
  const hoverClasses = hover
    ? "hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
