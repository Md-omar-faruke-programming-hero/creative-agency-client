import React from 'react';
import "./Banner.css"
import banner from "../../../images/logos/Frame.png"
const Banner = () => {
    return (
        
          
           <div className="row height mx-0 px-0 d-flex align-items-center justify-content-center ">
                <div className="col-12 col-md-4">
                    <h1 className="bannerT">Let’s Grow Your <br />
                        Brand To The  <br />
                        Next Level</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>  
                     <button className="btn btn-dark rounded-3 px-5">Hire us</button> 
                </div>
                <div className="col-12 col-md-7">
                    <div>
                    <img className="bannerimg" src={banner} alt="" />
                    </div>
                </div>

            </div>
          
            
       
    );
};

export default Banner;