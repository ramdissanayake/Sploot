import React from 'react';
import '../custom.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.easeout){
            return(
    
                <div class="slide-out-top header container-fluid">
                  
                 </div>
                );
        }
        else{
            return(
    
                <div class="fade-in-bck header container-fluid">
                  
                 </div>
                );
        }

    }
}