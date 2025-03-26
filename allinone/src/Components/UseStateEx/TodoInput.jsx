import { useState } from "react";

export const TodoInput = ({passfun}) =>{
    let [inputData, setInputData] = useState("");
    const inputAction = (e)=>{
        // e.preventDefault();
        setInputData(e.target.value);
    }
    const SubmitInput = ()=>{
        const todoDeom = {
            id:inputData,
            Task:inputData,
            Status : false
        }
        passfun(todoDeom);
    }
    return<>
    <div>
        <label>Enter Task</label>
        <input type="text" placeholder="Ex:- Study, Assigement" onChange={inputAction}/>
        <button onClick={SubmitInput}>Submit</button>
    </div>
    </>
}