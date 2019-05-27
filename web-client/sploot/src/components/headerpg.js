import React from 'react';
import '../custom.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      
        if(this.props.easeout){
            return(
    
                <div class=" header container-fluid">
                  
                 </div>
                );
        }
        else{
            return(
    
                <div class="fade-in-left header container-fluid">
                  
                 </div>
                );
        }

    }
}