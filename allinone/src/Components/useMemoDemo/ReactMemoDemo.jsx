import React from "react";
const ReactMemoDemo = ({prop})=>{
    console.log("Rendering...");
    
    return <>
    <div>Print 1 - {prop}</div>
    </>
}

export const Memoised = React.memo(ReactMemoDemo);