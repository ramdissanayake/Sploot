// Routes to an individual Rescue Request
import React, { Component } from 'react';
import RequestView from '../components/requests/requestView';
import '../custom.css';
import Header from '../components/headerpg';

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
            if (this.state.currRequest!=undefined){
                // this.request = new Request(this.state.currRequest);
                
                return(
                    <div>
                    <Header easeout={true}/>
                    <RequestView p={this.state.currRequest}/>
                  

                    </div>
                )
            }
            else{
                return(
                    <div>

                    <Header/>
                    <div style={{height:'502px'}}></div>
                    </div>
                )
            }

    }
}