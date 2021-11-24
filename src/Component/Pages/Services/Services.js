import React, { useEffect, useState } from 'react';
import "./Services.css"

const Services = () => {
    const[services,setServices]=useState([])
    useEffect(()=>{
        fetch("./service.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="my-5">
            <h1 className="text-center mb-5 mt-5">Provide awesome <span className="service">services</span></h1>

            <div className="container">
            <div className="row px-0 mx-0   g-4">
           
           {
              services.map(service=>  <div key={service.name} className="col-12 col-md-4  ">
              <div className="shadow b h-100 p-5">
               <div className="text-center">
               <img src={service.img} style={{width:"74px",height:"74px"}} className="card-img-top " alt="..."/>
               </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{service.name}</h5>
                  <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                
              </div>
            </div> ) 
           }
          

           </div>
            </div>
           



            
        </div>
    );
};

export default Services;