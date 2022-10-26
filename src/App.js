// import logo from "./logo.png";
import "./Button.css";

function HelloWorld() {
  return <div className="container">Hello Function Component</div>;
}

function Button() {
  return <button className="btn">Click me</button>;
}

function App() {
  return (
    <div className="container mx-auto px-4">
      <HelloWorld />
      <Button />
    </div>
  );
}

export default App;
