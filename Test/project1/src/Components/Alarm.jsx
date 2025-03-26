import { useEffect, useState } from "react"

export const Alarm = () =>{
    let [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    useEffect(()=>{
    //    Start();
    return  ()=>{
        console.log("this is unmouted.")
    }
    },[])
    function Start(){
        if(timer != 0){
            return;
        }
        setTimer( setInterval(() => {
            setCount((p)=>{return p+1});
        }, 1000))
    }
    function Pause(){
        clearInterval(timer);
    }
    function Restart(){
        
        setCount(0);
        Start();
    }
    return <>
    <div>
        Counter : {count}
    </div>
    <div>
        <button onClick={()=>Start()}>Start</button>
        <button onClick={()=>Pause()}>Pause</button>
        <button onClick={()=>Restart()}>Re-Start</button>
    </div>
    </>
}