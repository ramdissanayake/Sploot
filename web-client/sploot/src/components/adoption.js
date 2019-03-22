import React from 'react';
import '../custom.css';
import NavBar from './navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { 
    Container,
    Row,
    Col } from 'reactstrap';
  

export default class Adoption extends React.Component {
    render(){
        return(
            <div>
            <div>
            <NavBar/>
                <Row noGutters>
            <Col className="Searchbar">
            </Col>
          </Row>
          

        <Row noGutters>
            <Col className="Contentbar">
              <h2>Adoption</h2>
              <p>content</p>
            </Col>
        </Row>
            </div>
            </div>
        );
    }
}