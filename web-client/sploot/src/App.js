import React from 'react';
import './custom.css';
import NavBar from './components/navbar';
import Adoption from './components/adoption';

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
      <div>
      <Container  fluid style={{"padding":"0"}}>
      
        <NavBar />
        <Adoption />

      </Container>
      </div>
      
  
     );
   }
 }
      