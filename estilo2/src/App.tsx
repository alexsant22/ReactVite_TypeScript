import React, { type CSSProperties, useState } from "react";
import Button from "./components/Button";

const App: React.FC = () => {
  const [hover, setHover] = useState(false); // ← Adicione este estado

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    fontFamily: "arial, sans-serif",
  };

  const titleStyle: CSSProperties = {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Projeto Vite com CSS in-line</h1>
      <Button hover={hover} setHover={setHover} />
    </div>
  );
};

export default App;