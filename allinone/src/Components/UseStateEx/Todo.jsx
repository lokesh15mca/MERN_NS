import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { ToDoPrint } from "./ToDoPrint";

export const Todo = () =>{
    let [todoList, setTodoList] = useState([]);
    
    const handelChanges = (prop)=>{
        setTodoList([...todoList, prop]);
    }
    const handelCompleteTask = (prop)=>{
        const updatedTodo =  todoList.map((e)=> {
           return e.Task === prop ? {...e, Status: !e.Status} : e
        })
        setTodoList(updatedTodo);
    }

    const showCompleted = ()=>{} //pendding task work on it
    const showNotCompleted = ()=>{} //pendding task work on it 
    return<>
    <TodoInput passfun={handelChanges}/>
    <div>
        {todoList.length != 0 ? <><ToDoPrint prop={todoList} handelCompleteTask={handelCompleteTask}/>
        <button onClick={showCompleted}> Show Completed</button>
        <button onClick={showNotCompleted}>Show Not Completed</button></>
        : ""}
    </div>
    </>
}