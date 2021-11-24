import React, { useEffect, useState } from 'react';

const Review = () => {
    const[reviews,setReview]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/userReview')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <h1 className="text-center mb-5">Clients Feedback</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        reviews.map(review=><div key={review._id} className="col-12 col-md-4 mb-0 p-5">
                        <div className="card h-100">
                          <div className="d-flex p-3 ">
                          <img src={review.img} style={{width:"64px",height:"64px"}} className="card-img-top" alt="..."/>
                          <div className="ms-3">
                          <h5 className="card-title mb-0">{review.name}</h5>
                          <small className="mt-0">{review.ocopation}</small>
                          </div>
                          </div>
                          <div className="card-body">
                            
                            <p className="card-text">{review.review}.</p>
                          </div>
                          
                        </div>
                      </div> )
                    }

                </div>

            </div>
            
        </div>
    );
};

export default Review;