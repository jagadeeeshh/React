import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Age from "./components/Age/Age";
import App from "./App";

//compoment composition- component inside component
//const Title=()=> (<h1>Hello from title</h1>);

//const number = 625;
//Functional components
//const Heading =()=> {
  //return (
   //<>
   //<Title/>
   //{325+300}
   //{number}
   //{console.log("hi!")}
   //<h1>Welcome to react</h1>
   //<h2>Welcome to react {number}</h2>
   //<h3>Welcome to react</h3>
   //{Title()}
   //</>
  //);
//}

const value1 = "Hello";
const value2 = "React";

const AppLayout = () =>{
  return(
    <>
    <Header arg1 ={value1} arg2={value2}/>
    <Body arg1 ={value1} arg2={value2}/>
    <Footer/>
    <Age/>
    
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
export default App;
