import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { Age } from "./components/Age/Age.tsx";
import { Employee } from "./components/Employee/Employee.tsx";



const value1 = "Hello";
const value2 = "React";

export const AppLayout = () =>{

  const emp1 : EmployeeProps={
    name:"jagadeesh",
    age:23,
    city:"californa",
    country: "USA"
  }



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
    <Age/>
    
    </>
  );
}


