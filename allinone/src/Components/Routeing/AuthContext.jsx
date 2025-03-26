import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    let [token, setToken] = useState("");
    const handelChange = (prop)=>{
        console.log("Auth token is "+prop);
        
        setToken(prop);
    }
return <AuthContext.Provider value={{token, handelChange}}>{children}
</AuthContext.Provider>
}