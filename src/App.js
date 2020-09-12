import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Productdetail from './components/Productdetail/Productdetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();


function App() {
        
const [loggedIn,setLoggedIn]=useState({});
  
  return (
    <UserContext.Provider value={[loggedIn,setLoggedIn]}>
    <h4>email:{loggedIn.email}</h4>
    
      
       
      <Router>
      <Header/>
        <Switch>
          <Route path="/shop">
                  <Shop></Shop>
          </Route>
          <Route path="/review">
                  <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
                  <Inventory></Inventory>
          </PrivateRoute>
          <Route exact path="/">
                  <Shop></Shop>
          </Route>
          <Route  path="/product/:productkey">
                  <Productdetail></Productdetail>
          </Route>
          <Route  path="/login">
                  <Login></Login>
          </Route>
          <PrivateRoute  path="/shipment">
                  <Shipment></Shipment>
          </PrivateRoute>
          <Route path="*">
                  <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
