import React,{Component} from 'react';
import RequestCard from './card';
import { Container, Row, Col } from 'reactstrap';

export default class Results extends Component{

    render(){
          return(
                <Container >
                  <Row>
                        <Col sm={{ size: '4', offset: 0}}>
                              <RequestCard/>
                        </Col>
                  </Row>
                </Container>
          )
           
        
    }
}