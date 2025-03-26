import { useState } from "react"

export const UseStareDomo = () =>{
    let [Count, setCount] = useState(0);
    const ButtonAction = ({prop})=>{
        setCount(Count-1);
    }
    const ButtonAction1 = ()=>{
        setCount(Count+1);
    }
    return<>
    Count : {Count}
    <div>
        <button onClick={ButtonAction1}>Add</button>
        <button onClick={()=>{ButtonAction("Sub");}}>Sub</button>
    </div>
    </>
}