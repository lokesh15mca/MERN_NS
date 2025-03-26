import React from "react";
const Print1 = ({prop})=>{
    console.log("Rendering...");
    
    return <>
    <div>Print 1 - {prop}</div>
    </>
}

export const Memoised = React.memo(Print1);