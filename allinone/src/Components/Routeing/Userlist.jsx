import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom";

export const Userlist = ()=>{
    var [resData, setRes]= useState(null);
    useEffect(()=>{
        const getData = async()=>{
        const data = await axios.get('https://reqres.in/api/users');
        setRes(data.data);
        }
        getData();
    },[])
    return <>This is User List Page
    
    <div>
    {resData == null ? "Loading... " : (resData.data.map((item) => {
        return <div key={item.id}>
            <Link to={`/userDetils/${item.id}`}><p>{item.id} - {item.first_name} </p>
            {/* <img src={item.avatar} alt="" /> */}
            </Link>
        </div>
    }) )}
    </div>
    </>
}