import React, { useState, useEffect } from "react";
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";

const Services =() =>{
    const [services, setServices] = useState([])
    const getData = async () =>{
        try{
            const data = await fetch('http://localhost:9000/api/data/service')
            const res = await data.json()
            console.log(res)
            setServices(res)
        }
        catch(error){
           console.log(error)
        }
    }
    useEffect (() => {
        getData()
      }, [])
    
    return(
        <>
            <section className="fromb">
                <div class="container pt-4 ">
                   <div class="row text-center  p-5" >
                    <h3> Our Services</h3><br/>
                       {
                            services.map((value) => {
                                return <div class="col-md-4 mb-3 "> 
                                
                                    <div class="card ">
                                        <div className=" card-body d-flex justify-content-around">
                                            <div>
                                                <img src={`http://localhost:9000/assets/${value.image}`} alt="" height="250px" width="100% "></img>
                                                <h4> {value.service_name}</h4>
                                                <h5>{value.description}</h5> 
                                            </div> 
                                        </div> 
                                        
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
            <Footer/> 
        </>
    )
}
export default Services;