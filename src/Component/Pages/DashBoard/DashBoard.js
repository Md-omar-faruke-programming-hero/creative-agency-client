import React from 'react';
import { Link,useRouteMatch,Switch, Route } from 'react-router-dom';
import logo from "../../../images/logos/logo.png"
import ListOrder from '../ListOrder/ListOrder';
import Order from '../Order/Order';
import UserReview from '../UserReviwe/UserReview';







const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="row mx-0 px-0 mt-5">
            <div className="col-md-2">
                <img  className="mb-5" src={logo} alt="" /> <br />
                <p className="text-center"><Link to="/">Home</Link></p>
                <p className="text-center"><Link to={`${url}`}>Order</Link></p>
                <p className="text-center"><Link to={`${url}/list`}>OrderList</Link></p>
                <p className="text-center"><Link to={`${url}/review`}>Review</Link></p>

                
                
             
                
                

            </div>
            <div className=" container col-md-10 ">
            <Switch>
                <Route exact path={path}>
                    <Order></Order>
                
                </Route>

                <Route path={`${path}/list`}>
                    <ListOrder></ListOrder>
                
                </Route>

                <Route path={`${path}/review`}>
                    <UserReview></UserReview>

                </Route>
            </Switch>

           
                    

            </div>
            
        </div>
    );
};

export default DashBoard;