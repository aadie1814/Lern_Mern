import React, { useState } from "react";
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import { toast } from 'react-toastify';
import Footer from "./Footer";
const Contact =() =>{
    const[name,setName] =useState("")
    const[email,setEmail] =useState("")
    const[message,setMessage] =useState("")
    const sendData = async (e)=>{
        e.preventDefault()
        try{
            const data = await fetch('http://localhost:9000/api/form/contact',{
                method: 'POST',
                body: JSON.stringify({name,email,message}),
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            })
            const res = await data.json()
            console.log(res)
            toast.success('Message Add successfully');
            setName("")
            setEmail("")
            setMessage("")
        }
        
        catch(error){
            console.log(error)
        }
    }
    return(
        <>
            <section className="frombg">
                <div className="container pt-4">
                    <div className="row p-5 ">
                     
                       <div className="col-md-6 bg-light   ">
                          <h2 className="text-center mt-5 text-dark">Contact</h2><br/>
                           <form onSubmit={sendData}>
                             <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Name...." id="name" name="name"></input><br/>
                             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" placeholder="Email...." id="email" name="email"></input><br/>
                             <textarea value={message} onChange={(e) => setMessage(e.target.value)} class="form-control"  placeholder="Message...." rows="5" id="comment" name="text"></textarea><br/>
                             <button type="submit" class="btn btn-primary buttons ">Submit</button><br/><br/>
                            </form>
                        </div>
                        <div className="col-md-6 p-0 ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14724.571426771863!2d75.8731924!3d22.6857253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd11cbaf30c5%3A0xeddd100ed6a7f182!2sIT%20park%20indore!5e0!3m2!1sen!2sin!4v1709207642986!5m2!1sen!2sin" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
               
            </section>
            <Footer/> 
        </>
    )
}
export default Contact;