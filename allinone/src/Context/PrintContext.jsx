import { useContext } from "react"
import { UserContext } from "./UserContext"

export const PrintContext = ()=>{
    const {counter, handelChnage} = useContext(UserContext);
    return <>
    Counter: {counter}
    <div>
    <button onClick={()=>{handelChnage("add")}}>Add</button>
    <button onClick={()=>{handelChnage("sub")}}>Sub</button>
    </div>
    </>
}