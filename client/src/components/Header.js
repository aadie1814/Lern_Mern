import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from '../image/logoaj.png'
import style from '../Header.modules.css'
import { Authcontext } from "../store/auth";
const Header = () => {
    const {isLoggedIn, LogoutUser} = useContext(Authcontext)
    return (
        <>
            {/*  <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-6 navul ">
                        {<img src={pic} alt='' height="60px" width="200px " ></img>}
                    </div>
                    <div className="col-md-6 p-0  ">
                        <ul className="navul  ">
                            <li className="nav "><NavLink to="/">Home</NavLink></li>
                            <li className="nav"><NavLink to="/About">About</NavLink></li>
                            <li className="nav"><NavLink to="/Services">Services</NavLink></li>
                            <li className="nav"><NavLink to="/Contact">Contact</NavLink></li>
                            <li className="nav "><NavLink to="/Login">Login</NavLink></li>
                            <li className="nav"><NavLink to="/Register">Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <nav class="navbar navbar-expand-md navul  ">
                <div class="container-fluid">
                    {<img src={pic} alt='' class="rounded-circle " height="60px" width="200px " ></img>}
                    <button class="navbar-toggler btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">

                            <li className="nav-item nav "><NavLink to="/">Home</NavLink></li>
                            <li className="nav-item nav "><NavLink to="/About">About</NavLink></li>
                            <li className="nav-item nav "><NavLink to="/Services">Services</NavLink></li>
                            <li className="nav-item nav "><NavLink to="/Contact">Contact</NavLink></li>
                            { 
                              isLoggedIn ? <li className=" nav text-light " onClick={LogoutUser}>Logout</li>
                              /* <li className="nav-item nav "><NavLink to="/Logout">Logout</NavLink></li> */
                               : <>
                                  <li className="nav-item nav  "><NavLink to="/Login">Login</NavLink></li>
                                  <li className="nav-item nav  "><NavLink to="/Register">Register</NavLink></li>
                                </>
                            } 
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Header;