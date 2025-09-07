const Body =(props)=>{
   
let {arg1,arg2}=props;
   console.log(arg1);
    return(
        <>
        <h1>Body</h1>
       
        {arg1}
        {arg2}
       
        </>
    );

}
export default Body;