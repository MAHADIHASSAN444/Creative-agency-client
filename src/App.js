import React, { useState,createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddService from './components/Admin/AddService/AddService';
import Admin from './components/Admin/Admin/Admin';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderForm from './components/ManageOrder/OrderForm/OrderForm';
import PostReview from './components/ManageOrder/PostReview/PostReview';
import ServiceList from './components/ManageOrder/ServiceList./ServiceList';
// import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

 export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
         <Route  path="/home">
            <Home></Home>
         </Route>
         <Route path="/dashboard">
            <Dashboard></Dashboard>
         </Route >
         <PrivateRoute path='/orderForm'>
         <OrderForm></OrderForm>
         </PrivateRoute>
         <Route path="/login">
            <Login></Login>
         </Route>
         {/* <Route path="/orderForm">
         <OrderForm></OrderForm>
         </Route> */}
         <Route path="/postReview">
         <PostReview></PostReview>
         </Route>
         <Route path="/addService">
         <AddService></AddService>
         </Route>
         <Route path="/makeAdmin">
         <MakeAdmin></MakeAdmin>
         </Route>
         <Route  path="/admin">
            <Admin></Admin>
         </Route>
         <Route path="/serviceList">
         <ServiceList></ServiceList>
         </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>

      </Switch>
    </Router>
     </UserContext.Provider>
  );
}

export default App;
