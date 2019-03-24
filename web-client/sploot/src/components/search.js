import React,{Component} from 'react';
import { Collapse, Button, Form, FormGroup, Label, Input, FormText,Col,Row } from 'reactstrap';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state={collapse:false};
    }

    toggle(e,now){
        this.setState(
            ({collapse:!now}));
            console.log("Collapse is "+now);
       
    } 

    render(){
        return(
            
            <section class="mw8 mw9-ns center bg-light-pink  pa3 ph5-ns">

            <Form class="center">
                <FormGroup>
                <Row  >
                    <Col sm>
                        <Input width="20%" type="text" name="searchText" id="searchText" placeholder="Look up for a furball!" />
                    </Col>
                </Row>
                    
                <Button color="link"
                onClick = {(e)=>this.toggle(e,this.state.collapse)}
                >Advanced Search</Button>
                </FormGroup>
                <Collapse isOpen={this.state.collapse}>
                    Advanced
                    
                </Collapse>
            </Form>
            </section>
          


        )
    }
}