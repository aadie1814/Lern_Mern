import React, { useContext, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from '../image/login.jpg'
import style from '../Header.modules.css'
import { NavLink } from "react-router-dom";
import { Authcontext } from "../store/auth";
import { toast } from 'react-toastify';


/* const bcrypt = require('bcrypt') */
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { storageTokenLs } = useContext(Authcontext)
    

    const sendData = async (e) => {
        e.preventDefault()
        try {
            const data = await fetch('http://localhost:9000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const res = await data.json()
            console.log(res)
            if (!email || !password) {
                toast.error('All fields are required');
            }
            else {
                if (res.msg === 'You are not a registered user') {
                    toast.error('You are not a registered user')

                }
                else {
                   storageTokenLs(res.token)
                   toast.success('You are login successfully');

                   setEmail("")
                  setPassword("")
                }
            } 
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <section className="frombg">
                <div className="container pt-5">
                    <div className="row p-5">
                        <div className="col-md-6 bg-success">
                            <form onSubmit={sendData}>
                                <h2 className="text-center my-5">Login</h2>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control formiinput" placeholder=" Enter Your Email" id="email" name="email"></input> <br />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control formiinput" placeholder=" Enter Your Password" id="pass" name="password"></input><br />
                                <button type="submit" class="btn btn-primary b">Login</button><br /><br />
                                <h6 className="dd">Don't have an account? <NavLink to="/register" className="text-primary">Signup Now</NavLink> </h6>
                            </form>
                        </div>

                        <div className="col-md-6 p-0">
                            {<img src={pic} alt=''height="400px" width="100%"></img>}
                        </div>

                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Login;