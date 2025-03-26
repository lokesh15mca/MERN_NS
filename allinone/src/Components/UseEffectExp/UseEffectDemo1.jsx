import { useState } from "react"
import { useEffect } from "react"

export const UseEffectDemo1 = ()=>{
    const [data, setData] = useState("");
    const [age, setAge] = useState(0);
    const [name, setName] = useState(0);
    useEffect(()=>{
        console.log("this is first useEffert with API call");
        
        // fetch("https://reqres.in/api/users").then((res)=>res.json()).then(
        //     (res)=> setData(res.data)
        // )
        // async function getData(){
        //     const dd =await fetch("https://reqres.in/api/users").then((res)=>res.json());
        //     setData(dd.data);
        // }
        // getData(); //other way to make a API call
        return ()=>{
            console.log("unmounting the useEffect 1");
            
        }
    },[])
    useEffect(()=>{
        console.log("Updating age"+age);
        return ()=>{
            console.log("unmounting the useEffect 2");
            
        }
    },[age])
    useEffect(()=>{
        console.log("Updating Name"+name)
        return ()=>{
            console.log("unmounting the useEffect 3");
            
        }
    },[name])
    useEffect(()=>{
        console.log("Updating age "+age+" and name "+name)
        return ()=>{
            console.log("unmounting the useEffect 4");
            
        }
    },[age, name])
    useEffect(()=>{
        console.log("Updating without dependence")
        return ()=>{
            console.log("unmounting the useEffect 5");
            
        }
    })
    return<>
    <div>
        {!data ? "Loading..." : <>
        {data.map((item)=>{
            return <div>
                <p>{item.id} - {item.first_name} {item.last_name}</p>
            </div>
        })}
        </>}
    </div>
    <button onClick={()=>setAge(Math.random())}>Change age</button>
    <button onClick={()=>setName(Math.random())}>Change Name</button>
    </>
}