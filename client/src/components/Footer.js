import React from "react";
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
/* import'../new.css'; */
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Footer =() =>{
    return(
    <>  
        <section className="bg-dark"> 
           <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="text-light text-center mt-4 i">Company</h4><hr/>
                        <li className="text-center i"><NavLink to="/"><h5>About Us</h5></NavLink></li> 
                        <li className="text-center i"><NavLink to="/"><h5>Our Services</h5></NavLink></li> 
                        <li className="text-center i"><NavLink to="/"><h5>Privancy Policy</h5></NavLink></li> 
                        <li className="text-center i"><NavLink to="/"><h5>Affiliate Program</h5></NavLink></li> 
                    </div>
                    <div className="col-md-3">
                        <h4 className="text-light text-center mt-4 i">Get Help</h4 ><hr/>
                        <li className="text-center i"><NavLink to="/About"><h5>FAQ</h5></NavLink></li>
                        <li className="text-center i"><NavLink to="/About"><h5>Shipping</h5></NavLink></li>
                        <li className="text-center i"><NavLink to="/About"><h5>Returns</h5></NavLink></li>
                        <li className="text-center i"><NavLink to="/About"><h5>Order Status</h5></NavLink></li>
                        <li className="text-center i"><NavLink to="/About"><h5>Payment options</h5></NavLink></li>
                    </div>
                    <div className="col-md-3">
                       <h4 className="text-light text-center mt-4 i">Online Shop</h4><hr/>
                       <li className="text-center i"><NavLink to="/Product"><h5>Watch</h5></NavLink></li>
                       <li className="text-center i"><NavLink to="/Product"><h5>Bag</h5></NavLink></li>
                       <li className="text-center i"><NavLink to="/Product"><h5>Shoes</h5></NavLink></li>
                       <li className="text-center i"><NavLink to="/Product"><h5>Dress</h5></NavLink></li>
                    </div>
                    <div className="col-md-3 mt">
                       <h4 className="text-light text-center mt-4 i">Follow Us</h4><hr/>
                       <NavLink to="/"><FaFacebook className="icon mt-2"></FaFacebook></NavLink>
                       <NavLink to="/"><FaInstagram className="icon mt-2"></FaInstagram></NavLink>
                       <NavLink to="/"><CiLinkedin className="icon mt-2"></CiLinkedin></NavLink>
                       <NavLink to="/"><CiTwitter className="icon mt-2"></CiTwitter></NavLink>
                    </div>
                <h4 className="text-white text-center m-5">Design By <span className="text-warning"> Aditya Joshi </span></h4>
                </div>
            </div>
            
        </section>
     </> )

}
export default Footer;