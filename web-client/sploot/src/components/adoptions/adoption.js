import React,{Component} from 'react';
// import Milestones from '../milestones/milestones';



export default class Animal extends Component{
    constructor(props){
        super(props);
        // this.milestones=null
    }

    test(){
        console.log(this.props)
        alert('hi');
    }


    newAnimal(payload,callback){
        // this.milestones = new Milestones
        // this.milestones.Reported();
        // let miles = JSON.stringify(this.milestones.stringify())
        
        // payload.append('milestones',miles);
        
        fetch('../../api/adoptions/new',{
            'method':'POST',
            'body':payload
        })
        // .then(r=>(r.json()))
        .then(r=>{
            console.log(r)
            callback()
        })
    }
    
    getImage(){
        // calls api end point with the unique stamp
        return fetch('/api/adoptions/static/'+ this.props.stamp)
        .then(r=>r.json())
        .then(images=>{
            //    var images=[];
            //    images.push(images.files[0]);
            return images.files;
        }).catch(err=>(console.log(err)));
    }
}