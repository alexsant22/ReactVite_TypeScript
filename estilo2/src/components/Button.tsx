import React, { type CSSProperties } from "react";

interface ButtonProps {
  hover: boolean;
  setHover: (hover: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({ hover, setHover }) => {
  const buttonStyle: CSSProperties = {
    padding: "10px 20px",
    backgroundColor: hover ? "#0056b3" : "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.25s",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Clique Aqui!
    </button>
  );
};

export default Button;
