import React from 'react';
import '../custom.css';

import { 
    Container,
    Row,
    Col } from 'reactstrap';
  

export default class Adoption extends React.Component {
    render(){
        return(
            <div>
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
        );
    }
}