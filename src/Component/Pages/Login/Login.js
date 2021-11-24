import React from 'react';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import logo from "../../../images/logos/logo.png"
import Navbar from '../Navbar/Navbar';

const Login = () => {
    const history=useHistory()
    const location=useLocation()
    const redirect_uri= location.state?.from || "/home"
    const{signInUsingGoogle}=useAuth()

const signInUsingGoogle1=()=>{
    signInUsingGoogle()
    .then((result) => {
        history.push(redirect_uri)  
      const user = result.user;
      
      
  })
    
    
}
    return (
        <>
        <Navbar></Navbar>
        <div className=" bg-light d-flex justify-content-center align-items-center " style={{height:"100vh"}}>

            <div className="col-sm-6">
                 <p className="text-center"> <img src={logo} className=" mb-5"  style={{width:"150px",height:"47px"}} alt="" /></p>
                <div className="card d-flex align-items-center"  >
                   
                <div className="card-body">
                    <h1 className="text-center">Log In</h1>
                <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="email"/> <br />
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password"/> <br />
                <p className="text-center"><input type="submit" className="btn btn-success " value="submit" /></p>
                <p className="text-center mb-3">new user? <Link to="/signup">signup</Link> </p>
             <hr />
             <p className="text-center"><button onClick={signInUsingGoogle1} className="btn btn-danger rounded-3">log in with google</button></p>


                  
                    
                    
                </div>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Login;