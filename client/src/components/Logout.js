/* import React, { useContext, useEffect } from "react";
import { Authcontext } from "../store/auth";
import { Navigate } from "react-router-dom";
const Logout = () => {
    const {LogoutUser} =useContext(Authcontext)
    useEffect(()=>{
        LogoutUser()
    },[LogoutUser])
    return < Navigate to ='/login'></Navigate>
       
    
}
export default Logout; */