import { createContext, useEffect, useState } from "react";
const Authcontext = createContext()
const AuthProvider =({children}) => {
    const [token,setToken]=useState(localStorage.getItem('token'))
    const [user,setUser]= useState("")
    const authorizationToken = `Bearer ${token}`
    const [isloading ,setIsloading] = useState(true)
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
   
    
   /*  jwt AUTHENTICATION -to get currently isLoggedIn user data */
   const userAuthorization= async ()=>{
      try {
        setIsloading(true)
        const data= await fetch('http://localhost:9000/api/auth/user',{
            headers:{
              authorization:authorizationToken
            }
        })
        const res=await data.json()
         setUser(res)
        setIsloading(false)
    }
     catch (error) {
     console.log('Error', error);
     
    }
}
useEffect(()=>{
   userAuthorization()
},[]);
    /* const userAuthentication =  async () =>{
        try{
            setIsloading(true)
            const data = await fetch('http://localhost:9000/api/auth/user',{
                headers:{
                    authorization:authorizationToken
                }
            })
            const res = await data.json()
              console.log(res) 
            setUser(res)
            setIsloading(false)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        userAuthentication()
    },[])

    */
   
   

    return <Authcontext.Provider value={{storageTokenLs, LogoutUser, isLoggedIn,  authorizationToken, user, isloading}}>
        {children}
        </Authcontext.Provider>
}
export{ Authcontext, AuthProvider }