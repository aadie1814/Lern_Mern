import React from "react";
import pic from '../image/about.png'
import pic1 from '../image/about-1-519x564.jpg'
import Footer from "./Footer";
const About = () => {
    return (
        <>
            <section>
                <div className="container-fuiid">
                    {<img src={pic} alt='' height="600px" width="100%"></img>}

                </div>
            </section>
            <section className="">
                <div className="container">
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
                            <h5>BUSINESS MANAGEMENT</h5>
                            <div class="progress">
                                <div class="progress-bar pro" >70%</div>
                            </div><br/>
                            <h5>ANALYTICS & AUDIT</h5>
                            <div class="progress">
                                <div class="progress-bar pro1" >72%</div>
                            </div><br/>
                            <h5>STRATEGIC THINKING</h5>
                            <div class="progress">
                                <div class="progress-bar pro2" >88%</div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container mt-5">
                <h4 className="text-center i">Our Students</h4>
            </div>
        </section>
        <Footer/> 
        
        </>
    )
        }
export default About;