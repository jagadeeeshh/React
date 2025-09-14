// import { useState } from "react";
// const Age = ()=>{

import { useState } from "react";
import './Age.css';

//     const [count, setcount]=useState(0);

//     return(
//         <>
//         <h1>Age</h1>
//         <h3>{count}</h3>
//         <button
//             onClick={
//                 ()=>{
//                     console.log("Before count "+ count);
//                     setcount(count+1);
//                     console.log("After count "+count);
//                 }

//             }
            
            
//                 >Click me</button>
//         </>
//     );
// }
// export default Age;

export const Age=()=>{
    //state variable 
    //const [statevariable, statevariablechange]=useState(initial value)
    // setcount(count+1) this is not recommended 
    // when you call setstate like setcount, react doesn't update the state immedietly. Instead , it schedule it, so if you rely on the current value, you might get 
    const[count1, setCount1]= useState<number>(0);
    const[count2,setCount2]=useState(0);

    const[todo,setTodo]=useState(["jagadeesh"," BK"]);

    const[todo2,setTodo2]=useState({
        name: ["jagadeesh"],
        age: 23,
    });

    const incrementalCount1=()=>{
        setCount1(count1+1);
        setCount1(count1+1);
        setCount1(count1+1);
    }
    
     const incrementalCount2=()=>{
        setCount2(prev=>prev+1);
        setCount2(prev=>prev+1);
        setCount2(prev=>prev+1);
    }

    const addTodo=()=>{
        setTodo([...todo,"jaggu"]);
    }

     const addTodo2=()=>{
        setTodo2(prev=>
        ({
            ...todo2,
            name:[prev.name+"jaggu"],
            age: 24,
        }))
    }


    return(
        <>
            
            <h1>Count : {count1} </h1>
            <button onClick={incrementalCount1}>
              click me to increse the count
            </button>

            <hr/>

             <h1>Count : {count2} </h1>
            <button onClick={incrementalCount2}>
              click me to increse the count
            </button>
            
            <hr/>
            <h1>Namne : {todo}</h1>
            <button onClick={addTodo}>
              click me to add
            </button>

            <hr/>
            <h1>Name : {todo2.name} - {todo2.age}</h1>
            <button onClick={addTodo2}>
              click me to change
            </button>

        </>);

        

}