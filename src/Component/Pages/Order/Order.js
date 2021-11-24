import React, {  useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import useAuth from '../../../Hook/useAuth';

const Order = () => {
    const {user}=useAuth()
    
    const[service,setService]=useState('')
    const[projectInfo,setProjectInfo]=useState('')
    const[image,setImage]=useState(null)


    const submit=e=>{
        e.preventDefault()
        const formData= new FormData()
        formData.append("name",user.displayName)
        formData.append("email",user.email)
        formData.append("service",service)
        formData.append("projectInfo",projectInfo)
        formData.append("image",image)

        fetch('http://localhost:5000/userOrder',{
            method:"post",
            body: formData
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("order post successfully")
            }
        })

   
    }
    return (
        <div>
                 <div className="row">
                    <h1>Order</h1>

                 </div>
                <div className="row bg-light container">

                   <div className="w-75 my-5">
                  <form onSubmit={submit}>
                  <input  value={user.displayName} type="text" className="form-control " id="exampleFormControlInput1"/> <br /> 

                    <input type="email" value={user.email} className="form-control" id="exampleFormControlInput1" /> <br />

                    <input onBlur={e=>setService(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Service"/> <br />

                    <textarea onBlur={e=>setProjectInfo(e.target.value)} placeholder="project detils" className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea><br />

                    <label htmlFor=""> select project file</label>
                    <input onBlur={e=>setImage(e.target.files[0])} type="file" accept="image/*" className="form-control w-50" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/> <br />

                   <p className="text-center"> <input type="submit" className="w-100 btn btn-primary " value="Submit" /></p>
                  </form>


                   </div>
                 
                   
                    
                   

                </div>
            
        </div>
    );
};

export default Order;