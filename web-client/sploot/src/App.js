import React from 'react';

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import Adoption from './routes/adoption';
import DogProfile from './routes/dogprofile';
import HomePage from './routes/homepage';
import Requests from './routes/requests';
import AdminR from './routes/admin';
//import Adoptions from './routes/adoptions';
import Users from './routes/users';
import Sidebar from './components/sidebar';
// import Login from './components/login';
import newRequest from './routes/requestNew';
import RequestR from './routes/request';
import Usersp from './components/admin/users';
//import Adp from './components/admin/adoptions';
import newAdoption from './components/adoptions/adoptNew'
import NavBar from './components/navbar';
import Adminp from './components/admin/admin';

import Footer from './components/footer';
import Login from './components/login'
import NotFound from './components/errors/404'

import Register from './routes/register';


import {default as test} from './components/map/geoSel'


export default class App extends React.Component {
  constructor(props){
    super();
    this.state ={
      loader : true
    }
  }
  componentDidMount(){
    this.setState({
      loader:false
    })
  }
  render() {
    if(!this.state.loader){

      return (
        <div id="container">
        <Router>

          <NavBar/> 
          <Switch>
            <Route path ='/' exact component={HomePage} />
            <Route path ='/requests' exact component={Requests} />
            <Route path ='/requests/new' exact component={newRequest} />  {/*Use second level routing*/}
            <Route path ='/adoptions' exact  component={Adoption} />
            <Route path ='/requests/:stamp' component={RequestR}/>
            <Route path ='/login' component={Login}/>
            <Route path ='/adoptions/new' component={newAdoption}/>
            <Route path ='/admin' component={AdminR}/>
            <Route path ='/register' exact component={Register} />
            <Route path ='/users' component={Usersp}/>
            {/* <Route path ='/adop' component={Adp}/> */}
            <Route path ='/test' component={test}/>

            <Route component={NotFound} />
          </Switch>
          {/* <Footer /> */}
        </Router>
        </div>
       );
    }
    else{
      return(
        "SPLOOT IS LOADING..."
      )
    }


   }
 }
      
