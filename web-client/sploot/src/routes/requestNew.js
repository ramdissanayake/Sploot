import React, { Component } from 'react';
import NewRescue from '../components/requests/newRescue';
import '../custom.css';
import Header from '../components/headerpg';

export default class newRequest extends Component{
    constructor(props){
        super(props);
        this.state = {tracker:[]}
        
    }

    render(){
        return(
            <div>
            {/* <Header/> */}
           
            <NewRescue />
            </div>
        )
    }
}