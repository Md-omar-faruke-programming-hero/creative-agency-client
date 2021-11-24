import React from 'react';
import { Route ,Redirect} from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const{user,isloading}=useAuth()
    if(isloading){
        return <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    else{
        return (
            <Route
            {...rest}
            render={({location})=>
                user.email ? children : <Redirect
                to={{
                    pathname:"/login",
                    state: { from: location }
                }}
                ></Redirect>
        }
            
            >
                
            </Route>
        );
    }
   
};

export default PrivateRoute;