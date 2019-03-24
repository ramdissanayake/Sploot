import React from 'react';
import './custom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Adoption from './components/adoption';
import DogProfile from './components/dogprofile';
import HomePage from './components/homepage';

export default class App extends React.Component {
  
  render() {
    return (
      <Router>
          <Route path ='/' exact component={Adoption} />
          <Route path ='/d' component={DogProfile} />
          <Route path ='/h' component={HomePage} />
        </Router>
     );
   }
 }
      