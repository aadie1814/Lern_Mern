import React from "react";
import pic from '../image/about.png'
import pic1 from '../image/about-1-519x564.jpg'
import { MdWorkspacesOutline } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import Footer from "./Footer";
const About = () => {
    return (
        <>
            <section className="aboutimage">
                <div className="container-fuiid">
                    {<img src={pic} alt='' height="600px" width="100%"></img>}

                </div>
            </section>
            <section>
                <div className="container mb-2">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            {<img src={pic1} alt='' height="550px" width="100%"></img>}
                        </div>
                        <div className="col-md-6 mt-5">
                            {/* <h1 className="mt-4">Why Choose Us</h1> */}
                            <h3 className="text-center">Experience</h3>
                            <p> Donec ut erat at lorem pulvinar iaculis vel sed dui. Praesent ut ipsum eros.
                                Quisque bibendum, quam sit amet tincidunt fringilla, augue urna mollis
                                diam, et ornare elit tellus sed lacus. Cras sollicitudin metus sed nulla
                                euismod, at rhoncus turpis ullamcorper.
                            </p><br />
                            <h5>Web Developer</h5>
                            <div class="progress">
                                <div class="progress-bar pro" >70%</div>
                            </div><br />
                            <h5>React Developer</h5>
                            <div class="progress">
                                <div class="progress-bar pro1" >72%</div>
                            </div><br />
                            <h5>Java Developer</h5>
                            <div class="progress">
                                <div class="progress-bar pro2" >88%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" p-5 aboutbgi">
                <h2 className="  i text-center text-white">Let's Discuss your Projects</h2>
                <p className="mt-4 i text-center text-white">We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your<br></br>
                    project needs with our team, we will get back asap</p>
                <button type="button" className="btn  btn-primary mx-auto d-block mt-5">Contact Us</button>
            </section><br/>
            <section class=" text-center m-5 ">
                <div className="row m-0 p-0">
                   <div className="col-md-4">
                        <span className="incc"><MdWorkspacesOutline /></span>
                        <h3>150+</h3>
                        <h4>Happy Clients</h4>
                    </div>
                    <div className="col-md-4">
                        <span className="incc"><GiProgression /></span>
                        <h3>350+</h3>
                        <h4>Completed Projects</h4>
                    </div>
                    <div className="col-md-4">
                        <span className="incc"><GiClockwork /></span>
                        <h3>453+</h3>
                        <h4>Hours Of Support</h4>
                    </div>
                </div>
            </section>
            <Footer />
        </>)
}
export default About;