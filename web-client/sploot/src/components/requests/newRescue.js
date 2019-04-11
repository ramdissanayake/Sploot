import React,{Component} from 'react';
import {Col} from 'tachyons';


export default class NewRescue extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={}
    }

    handleChange(e){
        var key=e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState(
            {[key]: value}
        )
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        const payload = new FormData(e.target);
        fetch("api/requests/new",{
            method:'POST',
            headers: {
                'connection':'close',
                'content-type': 'application/x-www-form-urlencoded',
            },
            // convert to  a json object 
            body:JSON.stringify(this.state),
        });
    }


    render(){
          return(
            <div className="pa4">
                <h1>
                    Animal Rescue Request!
                </h1>
                <form onSubmit={this.handleSubmit}>
     
                   <label>Add Photos</label><br/>   
                   <img src="https://via.placeholder.com/350x150"/><br/>
           
                    <label>Describe Briefly</label>
                    <input onChange={this.handleChange} name="title" type="text"/><br/>

                    <label>Location</label>
                    <input onChange={this.handleChange}name="location" type="text"/>
                    <input onChange={this.handleChange} type="checkbox" name="track" />Send Tracking Request<br/>
                   
                    <label>Contact Person</label>
                    {/* Load Contact information from session */}
                    <button>Sign In</button><br/>
                    <label>Contact Number</label>
                    <input onChange={this.handleChange} name="contact" type="text"/>
                    <input onChange={this.handleChange} type="checkbox" name="showNumber" />Send my phone number<br/>

                    <label><b>Additional Information</b></label><br/>
                    <input onChange={this.handleChange} type="checkbox" name="medical" />The Animal Needs Medical Attention<br/>
                    <input onChange={this.handleChange} type="checkbox" name="lost" />The Animal Appears to be Lost<br/>
                    <input onChange={this.handleChange} type="checkbox" name="tresspassable" />The Animal is on Private Property<br/>
                    <input onChange={this.handleChange} type="checkbox" name="aggression" />The Animal is Violent, Approach with Caution!<br/>
                    <label>Additional Information</label><br/>
                    <textarea onChange={this.handleChange} name="additional" ></textarea><br/>
                    <button type="submit" name="submit">Send Request</button>
                </form>
            </div>
          )
           
        
    }
}