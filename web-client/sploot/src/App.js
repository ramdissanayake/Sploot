import React from 'react';
import './custom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Adoption from './components/adoption';
import DogProfile from './components/dogprofile';

//import Searchbox from './Searchbox';

import { 
  Container,
  Row,
  Col } from 'reactstrap';

  

export default class App extends React.Component {
    constructor(props) {
              super(props);

              this.toggle = this.toggle.bind(this);
              this.state = {
               isOpen: false
              };
            }
            toggle() {
              this.setState({
                isOpen: !this.state.isOpen
              });
            }
  render() {
    return (
      <Router>
      <div>
      {/* <Container  fluid style={{"padding":"0"}}> */}
     
      
      <Route path ='/' exact component={Adoption} />
      <Route path ='/dogprof' component={DogProfile} />

      {/* </Container> */}
      
      
      </div>
      
      </Router>
     );
   }
 }
      