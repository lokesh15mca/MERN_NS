import { useEffect, useState } from "react"

export const Hook3 =()=>{
    const [state, setState] = useState();
    console.log("State is "+state);
    useEffect(()=>{}, []);
    return<>
    <input type="text" onChange={(e)=> setState(e.target.value)}></input>
    </>
}