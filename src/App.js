// import logo from "./logo.png";
// import "./Button.css";
// import ProjectsPage from "./projects/ProjectsPage";

function FruitListItem(props) {
  function handleClick(e, id) {
    e.preventDefault();
    console.log(e);
    console.log(`removed ${id}`);
  }

  return (
    <li onClick={(e) => handleClick(e, props.fruit.id)}>{props.fruit.name} </li>
  );
}

function FruitList(props) {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}

const data = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "blueberry" },
  { id: 4, name: "banana" },
  { id: 5, name: "kiwi" },
];

function App() {
  return (
    <div className="container mx-auto px-4">
      <FruitList fruits={data} />
    </div>
  );
}

export default App;
