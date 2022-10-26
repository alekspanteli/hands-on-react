// import logo from "./logo.png";

// function Image() {
//   return <img src="./logo.png" alt="test" />;
// }

function App() {
  // const logo = <img src="./logo.png" alt="test" />;
  const logo = {
    name: "React Logo",
    title: "React Logo",
    path: "./logo.svg",
  };
  return (
    <div className="container mx-auto px-4">
      {/* {logo} */}
      {/* <Image /> */}
      <img src={logo.path} alt={logo.name} title={logo.title} />
    </div>
  );
}

export default App;
