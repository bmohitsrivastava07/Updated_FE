import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login/LogIn";
import Register from "./components/Register/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import Page404 from "./components/Page404/Page404";
import Home from './Home';
import About from "./About";
import Feedback from "./Feedback";
import Product from "./Product";
import {CartProvider} from 'react-use-cart';
import Cart from './Cart';
import Profile from "./Profile";
/*import Admin from './Admin';*/
function App() {
  return (
    <div>
      <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/register" exact component={Register} />
        <ProtectedRoute  path="/home" component={Home}/>
        //<ProtectedRoute path="/admin" component={Admin}/>
        <ProtectedRoute path="/about" component={About}/>
        <ProtectedRoute path="/feedback" component={Feedback}/>
          {/* <Route exact path="/about" component={About} />
          < Route path="/feedback" component={Feedback} /> */}
            <ProtectedRoute  path="/profile" component={Profile}/> 
          <ProtectedRoute path="/product" component={Product}/>  
          <ProtectedRoute path='/cart' component={Cart}/>
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
      </CartProvider>
    </div>
  );
}
export default App;
