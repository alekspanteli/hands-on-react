// import logo from "./logo.png";
// import "./Button.css";
// import ProjectsPage from "./projects/ProjectsPage";

// import React from "react";

// import Car from "./Car";

import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          className="border border-black"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}

function App() {
  return (
    <div className="container mx-auto px-4">
      <MyForm />
    </div>
  );
}

export default App;
