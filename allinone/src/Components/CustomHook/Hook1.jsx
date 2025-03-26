import { useEffect, useState } from "react"
function useDelay(delay){
    const [render, setRender] = useState(false);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setRender(!render)
        },delay*1000);
        return ()=> clearInterval(timer);
    },[delay]);
    return render;
}
export const Hook1 = ()=>{
    const todelay = useDelay(2);
    if(!todelay){
        return null;
    }
    return <>
    Hello React
    </>
}