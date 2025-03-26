import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "./AuthContext";

export const Login = ()=>{
    const {token, handelChange} = useContext(AuthContext);
    const Submit = ()=>{
        handelChange(Math.random());
    }
    return<>
    <div><button onClick={Submit}>Submit</button></div>
    </>
}