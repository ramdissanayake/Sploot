// Routes to an individual Rescue Request
import React, { Component } from 'react';
import Request from '../components/requests/request';
import '../custom.css';
import Header from '../components/header';

export default class RequestR extends Component{
    constructor(props){
        super(props);
        this.state={
        
        }
        this.request=null;
    }

    componentDidMount() {
        fetch(`/api/requests/show/` + this.props.match.params.stamp)
          .then(response => (response.json()))
          .then(currRequest => {
     
            
            // var image = this.request.getImage().then(
            //   response=>{
                this.setState({
                  currRequest:currRequest
                })
                //   }
                // )
            })

            
            
        }
        
        render(){
        this.request = new Request(this.state.currRequest);
        this.request.test();
        return(
            <div>
            <Header/>
            

            </div>
        )
    }
}