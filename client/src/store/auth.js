import { createContext, useState } from "react";

const Authcontext = createContext()

const AuthProvider =({children}) => {
    const [token,setToken]=useState(localStorage.getItem('token'))
    const storageTokenLs = (serverToken) => {
        localStorage.setItem('token',serverToken);
        setToken(serverToken)
    }
    
    //tackling the logout functionality
    const LogoutUser = ( ) =>{
        setToken("")
        return localStorage.removeItem('token')
    }
    let isLoggedIn = !!token
    console.log('Login',isLoggedIn)
   

    return <Authcontext.Provider value={{storageTokenLs, LogoutUser,isLoggedIn}}>
        {children}
        </Authcontext.Provider>
}
export{ Authcontext, AuthProvider }