import React,{Component} from 'react';

export default class Request extends Component{
    constructor(props){
        super(props);
        this.state={resultSet:[]}
    
    }

    test(){
        // alert(this.props.title);
    }

    // calls api endpoint to save request to the database
    newRequest(payload){
        fetch('../api/requests/new',{
            'method':'POST',
            'body':payload
        })
        // .then(r=>(r.json()))
        .then(r=>console.log(r))
    }

    // getters
    getLocation(){
        return this.props.location
        
    }
    getImage(){
        // calls api end point with the unique stamp
        return fetch('../api/requests/static/'+ this.props.stamp)
        .then(r=>r.json())
        .then(images=>{
        //    var images=[];
        //    images.push(images.files[0]);
           return images.files;
        });
    }


    render(){
        return(
            <div>sdsdsdsdsd
                {this.props.title}
            </div>
        )
    }
}