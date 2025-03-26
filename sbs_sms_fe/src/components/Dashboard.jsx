import React from "react";
import { SideNav } from "./SideNav";
import { Outlet, useNavigate } from "react-router-dom";
// import '../components/'
export const Dashboard = () => {
    const navigae = useNavigate();
    const logoutHandler = ()=>{
        navigae("/login")
    }
  return <>
  <div className="dashboard-main-container">
    <div className="dashboard-container">
        <SideNav />
        <div className="main-container">
            <div className="top-bar">
                <div className="logo-container">
                    <img className="profile-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeUHamKBBjda6zy67n1-XwUf5OA72wdGdXw&s" alt="" />
                </div>
                <div className="profile-container">
                <h2 className="profile-name">Lokesh Institute</h2>
                <button className="logout-button" onClick={logoutHandler}>Logout</button>
                </div>
            </div>
            <div className="outlet-area">
            <Outlet />
            </div>
        </div>
    </div>
  </div>
  </>;
};
