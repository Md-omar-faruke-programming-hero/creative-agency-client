import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className=" footer ">
            <div className="container ">
            <div className="row d-flex justify-content-evenly  ">
                <div className="col-12 col-md-5 mt-5">
                    <h1>Let us handle your <br /> project, professionally.</h1>
                    <small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</small>
                </div>
                <div className="col-12 col-md-5 mt-5">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@example.com"/> <br />
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name"/><br />
                <textarea placeholder="your text" className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea><br />
                <button className="btn btn-dark px-5">send</button>


                </div>

            </div>
            <p className="text-center mt-5">copyright Orange labs 2022</p>
            
        </div>

        </div>
    );
};

export default Footer;