import React from 'react';
import './custom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Adoption from './routes/adoption';
import DogProfile from './routes/dogprofile';
import HomePage from './routes/homepage';
import Requests from './routes/requests';

export default class App extends React.Component {
  
  render() {
    return (
      <Router>
          <Route path ='/' exact component={HomePage} />
          <Route path ='/requests' component={Requests} />
          <Route path ='/adoptions'  component={Adoption} />
      </Router>
     );
   }
 }
      