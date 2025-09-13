// export const Employee = ({name,age})=>{
//     return(
//         <>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         </>
//     );
// }

// export const Employee = (props)=>{
//     return(
//         <>
//         <h1>{props.name}</h1>
//         <h1>{props.age}</h1>
//         </>
//     );
// }

export const Employee  = ({name,...rest}:EmployeeProps)=>{
    return(
        <>
        <h1>{name}</h1>
        <h1>{JSON.stringify(rest)}</h1>
        <h1>{rest.city}</h1>
        </>
    );
}

