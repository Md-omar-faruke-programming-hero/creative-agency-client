import React, { useRef } from 'react';
import useAuth from '../../../Hook/useAuth';

const UserReview = () => {
    const{user}=useAuth()

    const nameRef=useRef()
    const identityRef=useRef()
    const reviewRef=useRef()

    const submit=(e)=>{
        e.preventDefault()
        const name =nameRef.current.value;
        const ocopation=identityRef.current.value;
        const review=reviewRef.current.value;

        const userReview={
            name,ocopation,review,img:user.photoURL
        }

       fetch('http://localhost:5000/userReview',{
           method:"post",
           headers:{
               "content-type":"application/json"
           },
           body:JSON.stringify(userReview)
       }).then(res=>res.json())
       .then(data=>{
           if(data.insertedId){
               alert("thanku for your review")
               nameRef.current.value="";
               identityRef.current.value="";
               reviewRef.current.value=""
           }
       })

    }

    
    return (
        <div>
                <div className="row">
                    <h1>Review</h1>

                </div>
                <div className="row bg-light container">

               <div className="w-75 my-5">
               <form onSubmit={submit}>
               <input ref={nameRef} type="text" className="form-control " id="exampleFormControlInput1" placeholder="name"/> <br /> 

                <input ref={identityRef} type="text" className="form-control" id="exampleFormControlInput1" placeholder="company name,Designation"/> <br />

                <textarea ref={reviewRef} placeholder="your text" className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea><br />

                <p className="text-center"> <input type="submit" className="w-100 btn btn-primary " value="Submit" /></p>
               </form>


               </div>
             
               
                
               

                </div>
        
    </div>
    );
};

export default UserReview;