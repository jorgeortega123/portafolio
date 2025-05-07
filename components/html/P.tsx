import React, { HtmlHTMLAttributes } from "react";

interface PProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string; // Especificar que className es un string
  size?: "small" | "normal" | "medium";
  style?: React.CSSProperties;
}

export default function P({ children, className = "", size, style }: PProps) {
  const sizeFinal = () => {
    switch (size) {
      case "small":
        return "text-[.7rem] lg:text-[.8rem]";
      case "normal":
        return "text-[.9rem] lg:text-[1rem]";
      case "medium":
        return "  lg:text-[1.2rem] text-md font-medium ";
      default:
        return "text-[.9rem] lg:text-[1rem]";
    }
  };

  return (
    <p
      style={style}
      className={`text-[.9rem]  text-pretty ${sizeFinal()} ${className} `}
    >
      {children}
    </p>
  );
}
