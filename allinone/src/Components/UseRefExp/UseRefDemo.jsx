import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"

export const UseRefDemo = ()=>{
    const ref = useRef(10);
    const [data, setData] = useState();
    const [data1, setData1] = useState();
    console.log("this is ref "+ref.current);
    useEffect(()=>{
        ref.current = 20;
        
    },[data])
    useEffect(()=>{
        console.log("No change in ref "+ref.current);
        
        
    },[data1])

    const [counter, setCounter] = useState(0);
    const alarm = useRef(null);
    const Start = ()=>{
        // if(alarm.current){
        //     return;
        // }
        alarm.current = setInterval(() => {
            setCounter((pre)=>pre+1)
        }, 1500);
    }
    const Pause = ()=>{
        clearInterval(alarm.current);
    }
    const ReStart = ()=>{
        clearInterval(alarm.current);
        Start();
        setCounter(0);
    }

    return<>
    Ref value is  : {ref.current}
    <button onClick={()=>{setData(Math.random())}}>Chanage data</button>
    <button onClick={()=>{setData1(Math.random())}}>Chanage data1</button>

    <div>------------Start Alarm------------</div>
    <div>
        Counter : {counter}
    </div>
    <div>
    <button onClick={Start}>Start</button>
    <button onClick={Pause}>Pause</button>
    <button onClick={ReStart}>Re-Start</button>
    </div>
    <div>------------End Alarm------------</div>
    </>
}

// dont change the value between two rendering 
// changing in value shouldn't cause rerender