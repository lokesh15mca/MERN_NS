import { useReducer } from "react";

const reducer = (state, {type, payload}) =>{
    switch(type){
        case "INC_COUNT":
            return{
                ...state,
                count: state.count+payload
            }
        case "DEC_COUNT":
            return{
                ...state,
                count: state.count-payload
            }
        default:
            return {...state}
    }
}

export const Hook2 = ()=>{
    const [state, dispatch] = useReducer(reducer, {count:0});
    return <>
    <div>
<h3>Count : {state.count}</h3>
<button onClick={()=>{dispatch({type:"INC_COUNT", payload: 1})}}>Add</button>
<button onClick={()=>{dispatch({type:"DEC_COUNT", payload: 1})}}>Sub</button>
    </div>
    </>
}