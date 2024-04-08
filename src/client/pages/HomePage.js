import React from "react";

const HomePage = ()=>{
    return (
        <div>
        <div>I am Home  Very beautiful Component</div>
        <button onClick={()=>console.log("Pressed")}>Press me!</button>
        </div>
    )
    
}

export default {component : HomePage};