import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => {};
}

const Button = ({ children, onClick, disabled }: Props) => {
  return (
    <div>
      <button
        className="w-full py-3 bg-slate-600 rounded-sm text-white mt-5"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
