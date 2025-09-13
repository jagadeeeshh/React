import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import { Employee } from "./components/Employee/Employee";
//import App from "./App";

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

export const AppLayout = () =>{

  const emp1 : EmployeeProps={
    name:"jagadeesh",
    age:23,
    city:"californa",
    country: "USA"
  }

  // const arr1=[1,2,3,4,5,6,7,8];
  // const arr2 = [9,10,11,12];
  // const mergarr = [arr1,arr2];
  // const mergarr1 = [...arr1,...arr2];

  // console.log(mergarr);
  // console.log(mergarr1);

  const obj1 ={
    name : "jaggu",
    age: "28",
    
  }

  const obj2 ={
       city: "bangalore",
       country : "india",
  }

  const mergobj ={obj1,obj2};
  const mergobj1 = {...obj1,...obj2};

  console.log(mergobj);
  console.log(mergobj1);


  return(
    <>
     {/* <Header arg1 ={value1} arg2={value2}/>
    <Body arg1 ={value1} arg2={value2}/>
    <Footer/> */}

    
    
    <Employee name="jagadeesh" age = {23} />
    <Employee {...emp1}/>

    
    </>
  );
}


