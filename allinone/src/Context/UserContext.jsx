import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    let [counter, setCounter] = useState(0);
    const handelChnage = (prop)=>{
prop == "add" ? setCounter(counter+1) : setCounter(counter-1); 
    }
    return <UserContext.Provider value={{counter, handelChnage}}>
        {children}
    </UserContext.Provider>
}