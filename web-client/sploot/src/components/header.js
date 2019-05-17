import React from 'react';
import '../custom.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // return(
        //     null
        // )
        if(this.props.easeout){
            return(
    
                <div class="slide-out-top header container">
                  
                 </div>
                );
        }
        else{
            return(
    
                <div class="fade-in-left header container">
                  
                 </div>
                );
        }

    }
}