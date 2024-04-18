import React, { useContext } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Authcontext } from "../store/auth";

const AdminPage = () => {
    const {user, isloading} = useContext(Authcontext)
    console.log("Adminpage", user)

     if(isloading){
       return <h1>Loading....</h1>
     }
    if (!user.isAdmin){
        return <Navigate to="/" />
    }
   
  
    return (
        <>
            <ul className="sidebar">
                <li className="list"> <NavLink to="/admin/user">USER</NavLink></li><br/>
                <li className="list"> <NavLink to="/admin/contact">CONTACT</NavLink></li><br/>
                <div class="dropdown">
                    <li class="dropdown-toggle list " data-bs-toggle="dropdown">
                        SERVICE
                    </li><br/>
                    <ul class="dropdown-menu ">
                        <li className="list text-dark"> <NavLink  className="text-dark" to="/admin/services">Add services</NavLink></li>
                        <li className="list "> <NavLink className="text-dark" to="/admin/deleteservice">Delete Services</NavLink></li>
                    </ul>
                </div>
                <li className="list"> <NavLink to="/">HOME</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}
export default AdminPage;