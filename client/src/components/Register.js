import React, { useContext, useState } from "react";
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from '../image/register.jpg'
 import style from '../Header.modules.css'
 import { Authcontext } from "../store/auth";
 import{toast} from 'react-toastify';
const Register =() =>{
    const[user,setUser] =useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirm_password: ''
    })
    const handleInput =(e) => {
        let name =e.target.name
        let value = e.target.value
        setUser({
            ...user,
            [name]:value
        
        })
    }
    const {storageTokenLs} = useContext(Authcontext)
    const sendData = async (e)=>{
        e.preventDefault()
        try{
            const data = await fetch('http://localhost:9000/api/auth/register',{
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            })
            const res = await data.json()
            console.log(res) 
            const{ name,email,contact,password,confirm_password}= user
            if(!name || !email || !contact || !password || !confirm_password){
                toast.error('All fields are required');
            }
                else {
                    if (password !== confirm_password){
                        toast.error('Password  is not same'); 
                    } 
                    else {
                        if (res.msg === 'email is already exists') {
                            toast.error('Email already exists')

                        }
                        else{
                            storageTokenLs(res.token)
                            toast.success('You Are Registered Successfully');
                             setUser({
                                name: '',
                                email: '',
                                contact: '',
                                password: '',
                                confirm_password: ''
                              })
                          }
                    }
                  
                   
                }
                
             } 
                
            
      
        catch(error){
            console.log(error)
        }
    }
    return(
        <>
         <section className="fromrg">
            <div className="container pt-4 ">
                <div className="row p-5">
                    <div className="col-md-6 p-0">
                         { <img src={pic} alt='' height="600px" width="100%"></img> }  
                    </div>
                    <div className="col-md-6 br">
                        <form onSubmit={sendData}>
                           <h2 className=" text-center mt-3">Registration</h2>
                           <label className="lable ">Name:</label>
                           <input value={user.name} onChange={handleInput} type="text" className="form-control forminput" placeholder="Name" id="text" name="name"></input> <br/>
                           <label className="lable">Email:</label>
                           <input value={user.email} onChange={handleInput}  type="email" className="form-control forminput" placeholder=" Email Address" id="email" name="email"></input> <br/>
                           <label className="lable">Contact:</label>
                           <input value={user.contact} onChange={handleInput} type="text" className="form-control forminput" placeholder="Contact" id="text" name="contact"></input> <br/>
                           <label className="lable">Password:</label>
                           <input value={user.password} onChange={handleInput}  type="password" className="form-control forminput" placeholder="********** " id="pass" name="password"></input> <br/>
                           <label className="lable"> Confirm password:</label>
                           <input value={user.confirm_password} onChange={handleInput}  type="password" className="form-control forminput" placeholder="********** " id="pass" name="confirm_password"></input><br/>
                           <button type="submit" class="btn btn-primary mx-auto d-block ">SignUp</button><br/><br/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
export default Register;