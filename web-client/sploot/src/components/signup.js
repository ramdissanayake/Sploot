import React, {Component} from 'react';
import '../custom.css'

class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            address: '',
            idnumber: '',
            gender:'',
            contactno: '',
            city: '',
            email: '',
            password: '',
            rescuer: '', 
            veterinarian: '' , 
            volunteer:''
        }
    }    

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleRadioChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCheckboxChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    
        handleSubmit(payload,callback){
            // this.milestones = new Milestones
            // this.milestones.Reported();
            // let miles = JSON.stringify(this.milestones.stringify())
            
            // payload.append('milestones',miles);
            
            fetch('../../api/user',{
                'method':'POST',
                'body':payload
            })
            // .then(r=>(r.json()))
            .then(r=>{
                console.log(r)
                callback()
            })
        
    }

    render(){
        const {name, address, idnumber,  gender, contactno, city, male,female,rescuer, veterinarian , volunteer, email, password} = this.state
        
        const userdata = <div  className="panel scale-up-center adoption-form panel-default ">
            
        <div className="panel-heading">
        <div className="row">
        <div className="col-md-8 col-sm-12">
            Register in Sploot! to help Animals!! 
         </div>
        
        </div>
        </div>   
        <div class="panel-body">
            <fieldset>
        {/* <!-- Text input--> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="name">Name</label>  
        <div className="col-md-5">
        <input type="text" placeholder="Sarath" name="name" onChange={name} class="form-control input-md"  onChange={this.handleInputChange}/>
        </div>
        </div>

        {/* <!-- Text input--> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="address">Address</label>
        <div className="col-md-5">
        <input type="text" placeholder="No. 1234, street,colombo" name="address" value={address} class="form-control input-md" onChange={this.handleInputChange}/>
        </div>
        </div>
        
         {/* <!-- Text input--> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="contactno">Contact Number</label>
        <div className="col-md-5">
        <input type="text" placeholder="+94 xxx xxx xxx" name="contactno" class="form-control input-md" value={contactno} onChange={this.handleInputChange}/>
        </div>
        </div>
                
                
        {/* <!-- Text input--> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="idnumber">NIC number</label>  
        <div className="col-md-5">
        <input type="text" placeholder="91263xxxxv" name="idnumber" class="form-control input-md" value={idnumber} onChange={this.handleInputChange}/>
        </div>
        </div>

        {/* <!-- Text input--> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="city">City</label>  
        <div className="col-md-5">
        <input type="text" placeholder="Colombo" name="city" class="form-control input-md" value={city}  onChange={this.handleInputChange}/>
        </div>
        </div>
       
        {/* <!-- Multiple Radios --> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="sexgender">Gender</label>
        <div className="col-md-5">
        <div className="radio">
            <label forHTML="gender-male">
            <input type="radio" name="gender" id="gender-male" value={male} checked="checked" onChange={this.handleRadioChange}/>
            Male
            </label>
            </div>
        <div className="radio">
            <label forHTML="gender-female">
            <input type="radio" name="gender" id="gender-female" value={female} onChange={this.handleRadioChange}/>
            Female
            </label>
            </div>
        </div>
        </div>

        {/* <!-- Multiple Checkboxes --> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="role">Special Needs</label>
        <div className="col-md-4">
        <div className="checkbox">
            <label forHTML="role-0">
            <input type="checkbox" name="role" id="role-0" value={rescuer} onChange={this.handleCheckboxChange}/>
            Rescuer
            </label>
            </div>
        <div className="checkbox">
            <label forHTML="role-1">
            <input type="checkbox" name="role" id="role-1" value={veterinarian} onChange={this.handleCheckboxChange}/>
            Veterinarian
            </label>
            </div>
        <div className="checkbox">
            <label forHTML="role-2">
            <input type="checkbox" name="role" id="role-2" value={volunteer} onChange={this.handleCheckboxChange}/>
            Volunteer
            </label>
            </div>
        </div>
        </div>

        <a href="#pane1" 
                        class="btn btn-success">Next</a>

            </fieldset>

        </div>

        </div>

 const userEmailPassword = <div  class="panel scale-up-center adoption-form panel-default">
         <div className="panel-heading">
        <div className="row">
        <div className="col-md-8 col-sm-12">
            Register in Sploot! to help Animals!! 
         </div>
        
        </div>
        </div>   
 <div class="panel-body">

     <fieldset>

     <div className="form-group">
        <label className="col-md-4 control-label" forHTML="email">Email</label>  
        <div className="col-md-5">
        <input type="email"  placeholder="sarath@gmail.com" name="email" class="form-control input-md" value={email} onChange={this.handleInputChange}/> 
        </div>
        </div>

        {/* <!-- Text input--> */}
        <div className="form-group">
        <label className="col-md-4 control-label" forHTML="password">Password</label>  
        <div className="col-md-5">
        <input type="password"  placeholder="******" name="password" class="form-control input-md"  value={password} onChange={this.handleInputChange}/>
        </div>
        </div>

        <a href="#pane0"
                    class="btn btn-primary">Prev</a>
                                             <button 
                    type="submit" 
                    class="btn btn-success">Save!</button>

     </fieldset>
 
 </div>
 </div>


var panes = [userdata ,userEmailPassword]
        return (
           
            <div className="bodywrapper container ">
            <div className="row">        
            <div className="col-md-8">
            <div class="panel-body content" >
            <div class="row">
           
                   <div class="col-md-12 col-sm-12">
                
                    <form onSubmit={this.handleSubmit} class="form-horizontal">
                    <div class="tab-content">
                    <div class=" tab-pane  in active" id="pane0">
                    {panes[0]}
                     </div>
                    <div class="tab-pane " id="pane1">
                    {panes[1]}
                    </div>
                    </div> 
             
                    </form>
                </div>

            </div>
            </div>
            </div>

                     
                </div>
            </div>
           
                      
     
        
        )
}
}

export default SignUp



