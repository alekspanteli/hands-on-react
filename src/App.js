// import logo from "./logo.png";
// import "./Button.css";
// import ProjectsPage from "./projects/ProjectsPage";

// import React from "react";

import Car from "./Car";

function Garage() {
  return (
    <>
      <Car brand="Ford" />
    </>
  );
}

function App() {
  return (
    <div className="container mx-auto px-4">
      <Garage />
    </div>
  );
}

export default App;
