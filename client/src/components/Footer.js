import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
/* import'../new.css'; */
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import pic from '../image/logo.jpg'
const Footer = () => {
    return (
        <>
            <section className="navul">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            {<img src={pic} alt='' height="80px" width="200px " ></img>}
                            <p className="text-white text-center mt-5">Let Make step forword to make something new!</p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-light text-center mt-4 i">Useful Links</h4 ><br/>
                            <li className="text-center i"><NavLink to="/"><h5>Home </h5></NavLink></li>
                            <li className="text-center i"><NavLink to="/About"><h5>About</h5></NavLink></li>
                            <li className="text-center i"><NavLink to="/services"><h5>Services</h5></NavLink></li>
                            <li className="text-center i"><NavLink to="/Contact"><h5>Contact</h5></NavLink></li>
                        </div>
                        <div className="col-md-3 mt">
                            <h4 className="text-light text-center mt-4 i">Follow Us On</h4><br/>
                            <NavLink to=""><FaFacebook className="icon1 mt-2 "></FaFacebook></NavLink>
                            <NavLink to=""><FaInstagram className="icon1 mt-2 "></FaInstagram></NavLink>
                            <NavLink to=""><CiLinkedin className="icon1 mt-2 "></CiLinkedin></NavLink>
                            <NavLink to=""><CiTwitter className="icon1 mt-2 "></CiTwitter></NavLink>
                           {/*  <h5 className=" text-center text-white mt-5 i">Follow us on Various platform.</h5> */}
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-light text-center mt-4 i">Contact Us</h4><br/>
                            <address>
                                <h5 className="text-white text-center ">+91 1234567890</h5><br/>
                                <h5 className="text-white text-center i">Mail: <a href="mailto:abc1@gmail.com">abc1@gmail.com</a></h5> <br/>
                                <h5 className="text-white text-center i" > Visit us at:
                                    Atulya IT Park Indore
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14724.571426771863!2d75.8731924!3d22.6857253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd11cbaf30c5%3A0xeddd100ed6a7f182!2sIT%20park%20indore!5e0!3m2!1sen!2sin!4v1709207642986!5m2!1sen!2sin" width="100%" height="80px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                </h5> <br/>
                            </address>
                        </div>
                        <h6 className="text-white text-center i"> &copy; 2024 All Rights reserved . Design & Developed By <NavLink to=""><span className="text-warning"> Aditya Joshi </span></NavLink></h6>
                    </div>
                </div>
            </section>
        </> 
    )
}
export default Footer;