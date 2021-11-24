import React from 'react';

import brand3 from "../../../images/logos/netflix.png"
import brand4 from "../../../images/logos/slack.png"
import brand5 from "../../../images/logos/uber.png"
import "./Brand.css"


const Brand = () => {
    return (
    <div className="container  mb-5 ">
        <div className="i d-flex justify-content-evenly">
           <img src={brand5}   alt="" />
           <img src={brand3}  alt=""  />
           <img src={brand4}  alt="" />
        </div>
        
    </div>
    );
};

export default Brand;