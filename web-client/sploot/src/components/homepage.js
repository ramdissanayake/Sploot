import React from 'react';
import '../custom.css';

import NavBar from './navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { 
    Container,
    Row,
    Col } from 'reactstrap';

import { Button } from 'reactstrap';
  

export default class HomePage extends React.Component {
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
            <Col className="Contentbar1">
              <div className="row">
              <div className="col-md-6">
                <p>Current requests</p>
                

                {/* ****************************************** */}

                

                {/* ****************************************** */}


              </div>
              <div className="col-md-6" align="center">
              <button class="button button4">Help</button>
              </div>
              </div>
            </Col>
        </Row>
            </div>
            </div>
        );
    }
}