import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { Alarm } from './Components/Alarm';

function App() {
    const [todo, setTodo] = useState([]);
    useEffect(()=>{
        fetch("https://reqres.in/api/products").then((json)=> json.json()).then((e)=>{ console.log(e.data);
            setTodo(e.data);
        })
    },[])
    return ( 
    < div className = "App" >
        <header className = "App-header" >
        {todo.length ==0 ? "Loading..." : <table>
            <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>year</th>
            </tr>
            </thead>
        {todo.map((e)=>
            <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.year}</td>
            </tr>
             
        )}
        </table>}
        <Alarm />
        </header> 

        </div >
    ); 
}

export default App;