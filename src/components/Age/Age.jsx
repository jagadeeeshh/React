import { useState } from "react";
const Age = ()=>{

    const [count, setcount]=useState(0);

    return(
        <>
        <h1>Age</h1>
        <h3>{count}</h3>
        <button
            onClick={
                ()=>{
                    console.log("Before count "+ count);
                    setcount(count+1);
                    console.log("After count "+count);
                }

            }
            
            
                >Click me</button>
        </>
    );
}
export default Age;