import React from 'react';
import '../custom.css';

import { 
    Container,
    Row,
    Col } from 'reactstrap';
  
    import {
      
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem } from 'reactstrap';  

   
export default class NavBar extends React.Component {
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
    render(){
        return(
            
            <div>
                <Row noGutters>
                <Col >
                    <ul className="Topbar">
                        <li>Shop!</li>  
                        <li>Login</li>
                     </ul>  
                </Col>
            </Row>
     
     <Navbar className="Navbar_custom" expand="md" >
     <NavbarBrand className="Navbar_custom" href="/">SPLOOT!</NavbarBrand>
     <NavbarToggler onClick={this.toggle} />
     <Collapse isOpen={this.state.isOpen} navbar>
       <Nav className="ml-auto" navbar>
         <NavItem>
           <NavLink  className="Navbar_custom" href="/components/">Home</NavLink>
         </NavItem>
         <NavItem>
           <NavLink  className="Navbar_custom" href="/components/">Adoption</NavLink>
         </NavItem>
         <NavItem>
           <NavLink  className="Navbar_custom" href="/components/">Success Stories</NavLink>
         </NavItem>
         <NavItem>
           <NavLink  className="Navbar_custom" href="https://github.com/reactstrap/reactstrap">About</NavLink>
         </NavItem>
         <NavItem>
           <NavLink  className="Navbar_custom" href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
         </NavItem>
       </Nav>
     </Collapse>
   </Navbar>
            </div>
      
        );
    }
}