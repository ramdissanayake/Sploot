import React from 'react';
import './custom.css';
import './animate.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import Adoption from './routes/adoption';
import DogProfile from './routes/dogprofile';
import HomePage from './routes/homepage';
import Requests from './routes/requests';
import Login from './routes/login';
import newRequest from './routes/requestNew';
import RequestR from './routes/request';
import NavBar from './components/navbar';
import Footer from './components/footer';

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
        <div>
        <Router>
          <NavBar/> 
          <Switch>
            <Route path ='/' exact component={HomePage} />
            <Route path ='/requests' exact component={Requests} />
            <Route path ='/requests/new' exact component={newRequest} />  {/*Use second level routing*/}
            <Route path ='/adoptions'  component={Adoption} />
            <Route path ='/requests/:stamp' component={RequestR}/>
            <Route path ='/login' component={Login}/>
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <Footer />
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
      