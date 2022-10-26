// import logo from "./logo.png";
// import "./Button.css";
// import ProjectsPage from "./projects/ProjectsPage";

// function Greeter(props) {
//   const { first, last } = props;
//   return <h1>Hello, {`${first} ${last}`}</h1>;
// }

import PropTypes from "prop-types";

function Greeter({ first, last }) {
  return <h1>Hello, {`${first} ${last}`}</h1>;
}

Greeter.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
};

function App() {
  const Person = {
    firstName: "Alex",
    lastName: "Panteli",
  };
  return (
    <div className="container mx-auto px-4">
      <Greeter first={Person.firstName} last={Person.lastName} />
    </div>
  );
}

export default App;
