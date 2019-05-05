import React,{Component} from 'react';
import Milestones from '../milestones/milestones';

export default class Request extends Component{
    constructor(props){
        super(props);
        this.state={
        resultSet:[],
        image:[]
        }
        
        this.milestones=null;
    }
    


    test(){
        alert(this.props.title);
    }

    // calls api endpoint to save request to the database
    newRequest(payload){
        let milestones = this.newMilstones();
    
        
        payload.append('milestones',JSON.stringify(milestones));

        fetch('../api/requests/new',{
            'method':'POST',
            'body':payload
        })
        // .then(r=>(r.json()))
        .then(r=>console.log(r))
    }

    // getters
    getTitle(){
        return this.props.title
        
    }
    getStamp(){
        return this.props.stamp
        
    }
    getLocation(){
        return this.props.location
        
    }

    getContact(){
        return this.props.volunteer
        
    }

    getAdditional(){
        return this.props.additional
        
    }

    getTime(){
        return new Date(this.getStamp).toLocaleDateString("en-US")
        
    }

    getImage(){
        // calls api end point with the unique stamp
        return fetch('/api/requests/static/'+ this.props.stamp)
        .then(r=>r.json())
        .then(images=>{
        //    var images=[];
        //    images.push(images.files[0]);
           return images.files;
        }).catch(err=>(console.log(err)));
    }


    // Setters




    // Milestones
    // Creates a new milestone upon saving new requests
    newMilstones(){
        console.log('here')
        this.milestones = new Milestones
        // Build the Reported Milestone
        this.milestones.Reported(this.getTime());
        return this.milestones.stringify();
    }


    
    showMilestones(){
        this.milestones = new Milestones
        var nodes=JSON.parse(this.props.milestones);
        this.milestones.buildTree(nodes);
        return this.milestones.visualize();
        
    }




    render(){
        
        return(
            null
        )   
    }
}