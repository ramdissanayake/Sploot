import React,{Component} from 'react';
import Milestones from '../milestones/milestones';

export default class Request extends Component{
    constructor(props){
        super(props);
        this.state={
        resultSet:[],
        image:[]
        }
        this.test=0
        this.milestones=null
    
    
    }
    


    test(){
        console.log(this.props)
        alert(this.props.p.title);
    }

    
    // calls api endpoint to save request to the database
    newRequest(payload){
        this.milestones = new Milestones
        this.milestones.Reported();
        let miles = JSON.stringify(this.milestones.stringify())
        
        payload.append('milestones',miles);
        console.log(payload);
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

    getRescuers(){
        return this.props.rescuers;
    }

  

    // Setters




    // Milestones
    // Creates a new milestone upon saving new requests
     showMilestones(container){
        this.milestones = new Milestones
        var nodes=this.props.milestones;
        this.milestones.request = this.props._id;
        this.milestones.buildTree(nodes);
        this.milestones.visualize(null,container)
    }   


    //Rescuer Tools
    assign(rescuable=true){
        
        const x = document.getElementById('milestones-ul')
        let milestone= this.milestones.Rescuer()
        fetch('/api/requests/rescue/'+this.props._id,{
            'method':"POST",
            body:JSON.stringify(milestone)
        })
        .then((res)=>{
            if(res.status==200){
                window.location.reload();
                // alert("This Rescue Has been Assigned to You ")
                // this.milestones.visualize(milestone,x)
            }
            else if(res.status==401){
                alert("You Must be logged in to Rescue This Animal")
            }
        }
        )
    }

// Mark Animal as Found
found(){
    alert("Mark as FOund?")
    fetch('/api/requests/found/'+this.props._id,{
        "method":'POST',
        'body':""
    }).then((res)=>{
        if(res.status==200){
            alert("The Animal Has Been Marked as Found ")
        }
        else if(res.status==401){
            alert("Unauthorized Activity")
        }
        else {
            alert("Something didn't Sploot Well! Try Again Later!")
        }
    }
    )

   }
// Mark Request as Closed
closed(){
    alert("Mark as Closed?")
    fetch('/api/requests/closed/'+this.props._id,{
        "method":'POST',
        'body':""
    }).then((res)=>{
        if(res.status==200){
            alert("The Rescue has been Closed")
        }
        else if(res.status==401){
            alert("Unauthozied Activity")
        }
        else{
            alert("Something didn't Sploot Well! Try Again Later!")
        }
    }
    )

   }
// Mark Animal as Adoptable
adoptable(callback){
    alert("Mark as Closed?")
    fetch('/api/requests/adoptable/'+this.props._id,{
        "method":'POST',
        'body':""
    }).then((res)=>{
        if(res.status==200){
            alert("The Animal has been listed for Adoption")
            callback();
        }
        else if(res.status==401){
            alert("Unauthorized Activity")
        }
        else{
            alert("Something didn't Sploot Well! Try Again Later!")
        }
    }
    )

   

   }


// New Milestone
    newMile(e){
        e.preventDefault();
        const x = document.getElementById('milestones')
        let data = {
            title:e.target[0].value,
            body:e.target[1].value
        }
        let milestone = this.milestones.customeMile(data)
        fetch('/api/requests/rescue/'+this.props._id,{
            'method':"POST",
            body:JSON.stringify(milestone)
        }).then((res)=>{
            if(res.status==200){
                alert("Custom Milestone Added")
                this.milestones.visualize(milestone,x)
            }
            else if(res.status==401){
                alert("You Must be logged in to add custom milestones")
            }
        }
        )
    }
    
   
}