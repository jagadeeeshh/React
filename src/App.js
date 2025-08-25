import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//compoment composition- component inside component
const Title=()=> (<h1>Hello from title</h1>);

const number = 625;
//Functional components
const Heading =()=> {
  return (
   <>
   <Title/>
   {325+300}
   {number}
   {console.log("hi!")}
   <h1>Welcome to react</h1>
   <h2>Welcome to react {number}</h2>
   <h3>Welcome to react</h3>
   {Title()}
   </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
export default App;
