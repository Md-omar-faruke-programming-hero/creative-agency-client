import { BrowserRouter ,Switch,Route} from "react-router-dom";
import Home from "./Component/Home/Home";
import AuthProvider from "./Component/Pages/AuthProvider/AuthProvider";
import DashBoard from "./Component/Pages/DashBoard/DashBoard";
import Login from "./Component/Pages/Login/Login";
import PrivateRoute from "./Component/Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div >
     <AuthProvider>
     <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
      
            <Route  path="/home">
              <Home></Home>
            </Route>

            <Route  path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute  path="/dash">
              <DashBoard></DashBoard>
            </PrivateRoute>
        </Switch>
      </BrowserRouter>
     </AuthProvider>
      
    </div>
  );
}

export default App;
