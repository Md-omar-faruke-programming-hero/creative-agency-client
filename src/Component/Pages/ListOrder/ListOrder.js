import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';

const ListOrder = () => {
    const{user}=useAuth()
    const[lists,setList]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/userOrder?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setList(data))
    },[user.email])

    if(lists.length===0){
        return <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }else{

      const orderDelete=id=>{
        fetch(`http://localhost:5000/userOrder/${id}`,{
          method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
            alert("delete successfully")
            const remaim= lists.filter(rest=> id!==rest._id )
            setList(remaim)
          }
        })
        
      }

        return (
            <div>
            <div className="row">
               <h1>My Order</h1>
    
            </div>
           <div className="row bg-light container  " >
    
              <div className="row container" style={{marginBottom:"500px"}}>
                  {
                      lists.map(list=> <div key={list._id} class="col-12 col-md-4 mt-5" >
                      <div class="card h-100 p-2 ">
                        <div className="d-flex justify-content-around">
                        <img src={`data:image/jpeg;base64,${list.image}`} style={{width:"74px",height:"74px"}} class="rounded-circle card-img-top" alt="..."/>
                        <p className="text-warning">status :{list.status}</p>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">{list.service}</h5>
                          <p class="card-text">{list.projectInfo}.</p>
                        </div>
                        <button className="btn btn-success mb-2">Pay</button>
                        <button onClick={()=>orderDelete(list._id)} className="btn btn-danger">cancle</button>
                       
                      </div>
                    </div>)
                  }
    
              </div>
            
              
               
              
    
           </div>
       
    </div>
        );
    }
    
};

export default ListOrder;