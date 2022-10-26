// import logo from "./logo.png";

function App() {
  // const logo = <img src="./logo.png" alt="test" />;
  // const logo = {
  //   name: "React Logo",
  //   title: "React Logo",
  //   path: "./logo.svg",
  // };
  const list = (
    <>
      <div className="post">
        <h1>My First Blog Post</h1>
        <div>Author: Mark Twain</div>
        <div>Published: {new Date().toLocaleTimeString()}</div>
        <p>
          I am new to blogging and this is my first post. You should expect a
          lot of great things from me.
        </p>
      </div>
    </>
  );
  return (
    <div className="container mx-auto px-4">
      {/* {logo} */}
      {/* <Image /> */}
      {/* <img src={logo.path} alt={logo.name} title={logo.title} /> */}
      {list}
    </div>
  );
}

export default App;
