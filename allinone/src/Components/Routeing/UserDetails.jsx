import { useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Redirect } from "react-router-dom";
export const UserDetails = ()=>{
    const {token} = useContext(AuthContext);
    const {id} = useParams();
    console.log("this is a id "+id)
    var [userData, setRes]= useState({});
    useEffect(()=>{
        const getData = async()=>{
            console.log("url is" +`https://reqres.in/api/users/${id}`);
            
        const tt = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log("response "+tt.data.data);
        
        setRes(tt.data);
        }
        getData();
    },[id])
    if(!token){
        return <Redirect to="/Login" />
    }
    return <>
    <div>This is UserDetails Page </div>
    
    <p>Id: {id}</p>
    {!userData.hasOwnProperty('data') ? "Loading" : <div key={userData.data.id}>
            <p>{userData.data.id} - {userData.data.first_name} </p>
            <img src={userData.data.avatar} alt="" />
        </div>}
    
        

    
    </>
}