import React, { useEffect, useState } from 'react';
import "./Work.css"


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};






const Work = () => {
    const[works,setWorks]=useState([])
    useEffect(()=>{
        fetch("./work.json")
        .then(res=>res.json())
        .then(data=>setWorks(data))
    },[])


    
   
    return (
        
         <div className=" heightt d-flex align-items-center">
           
            <div className="container">
                   <h1 className="text-center mb-5 text-white">Here are some of <span className="service">our works</span></h1>

                   <Carousel 
                 
                     showDots={true}
                     infinite={true}
                     autoPlay={true}
                     arrows={false}
                     autoPlaySpeed={2000}
                   responsive={responsive}>
                        {
                        works.map(work=> <div>
                            
                            <div className="me-5">
                                <img src={work.img} className="card-img-top w-100  " style={{width:"465px",height:"334px"}}  alt="..."/>
                                
                                
                            </div>
                        </div>)  
                        }
                     </Carousel>   

                   
            
                
            </div>
       </div>
       
    );
};

export default Work;