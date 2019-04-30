import React,{Component} from 'react';

export default class Request extends Component{
    constructor(props){
        super(props);
        this.state={resultSet:[]}
    
    }

    newRequest(payload){
        
        fetch('../api/requests/new',{
            'method':'POST',
            'body':payload
        })
        .then(r=>(r.json()))
        .then(r=>console.log(r))
    
     
    }

}