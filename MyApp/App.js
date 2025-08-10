// To create element in react -->contains "id","attributes","children"
// react --> it contains core files of react



const heading=React.createElement("h1",{id:"root"}, "helloworld");

// reactDOM --> which is used to modify the DOM or DOM operations
// 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);