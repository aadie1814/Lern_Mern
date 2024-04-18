import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
/* import pic from '../image/homepageimage.avif' */
import { TbBookmarkEdit } from "react-icons/tb";
import { SiSololearn } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi2";
import video from'../image/istock-1186331555_preview.mp4';
import Footer from "./Footer";
const Home = () => {
    return (
        <>
            <section className="hmbg">
            <video className='videoTag' width="100%" autoPlay loop muted >
                    <source src={video} type='video/mp4' />
                </video>

                {/* <div className="container ">
            <div className="row">
                <div className="col-md-6 mt-5"><br/><br/>
                    <h2 className="i" >Professional Business </h2>
                    <h2 className="i">Education For You</h2><br/>
                    <p className="i">Business School delivers Online study programs with diploma </p>
                    <p className="i">Awards to learners from all corners of the world.</p>
                    
                </div> 
                <div className="col-md-6 mt-6 ml-5 mt-5 mb-4 ">
                { <img src={pic} alt='' height="350px" width="100%"></img> }
                </div>
            </div>
        </div> */}
            </section>
            <section className="">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4 crd  ">
                            <div class="card cd2 ">
                                <div class="card-body">
                                    <TbBookmarkEdit className="ih" ></TbBookmarkEdit>
                                    <h3 className="mt-2 text-white">Web Developer Online Courses</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 crd  ">
                            <div class="card cd2 ">
                                <div class="card-body">
                                    <SiSololearn className="ih"> </SiSololearn >
                                    <h3 className="mt-2 text-white">React Online Courses</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 crd  ">
                            <div class="card cd2 ">
                                <div class="card-body">
                                    <HiAcademicCap className=" ih"></HiAcademicCap >
                                    <h3 className="mt-2 text-white"> Java Developer Online Courses</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-2">
                <div className="container mt-5">
                    <div className="row ">
                        <h2 className="i text-center">Limited Time Offer: </h2>
                        <h2 className="i text-center">Get Our Book For Free !</h2>
                        <p className="i text-center mt-2">In this free Book written by our teachers, you can find out more</p>
                        <p className="i text-center">about efficient ways of business management in 2018.</p><br />
                        <button class="btn btn-dark text-light text-center book "> GET Book</button>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
export default Home;