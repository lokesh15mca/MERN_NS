import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";

export const AxiosDemo1 = ()=>{

    var [resData, setRes]= useState(null);
    useEffect(()=>{
        const getData = async()=>{
        var userData = await axios.get("https://reqres.in/api/users");
        // console.log("userdata "+JSON.stringify(userData.data));
        setRes(userData.data);
    }
    getData();
    }, [])

    return <>

    {resData == null ? "Loading... " : (resData.data.map((item) => {
        return <div key={item.id}>
            <p>{item.id} - {item.first_name}</p>
        </div>
    }) )}
    </>
}