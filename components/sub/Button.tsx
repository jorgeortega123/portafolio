import React, { FC, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  className?: string | undefined;
  buttonName: string;
}

const Button: FC<ButtonProps> = ({ onClick, className, buttonName }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer btn btn--med btn-background overflow-hidden ${className} `}
    >
      <img
        className="absolute w-[600px] h-[100px] top-0 left-0 z-[1]"
        src="/assets/png/font.png"
        alt=""
      />
      <p className="sticky z-[12] text-white">{buttonName}</p>
    </div>
  );
};

export default Button;
