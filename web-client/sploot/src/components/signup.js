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
    handleSelectChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleCheckboxChange = (event) => {
        this.setState({
            checkbox: event.target.value
        })
    }

      handleSubmit = (event) =>{
        // alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`) 
        event.preventDefault()
    }

    render(){
        const {name, address, idnumber,  gender, contactno, city, rescuer, veterinarian , volunteer, email, password} = this.state
        return (
           
           <div className="card container col-md-6" style={{color:'red'}}>
           
               <form onSubmit={this.handleSubmit}>
               <div className="row">  
                <input type="text" placeholder="Name" name="name" onChange={name} onChange={this.handleInputChange}/>
                <input type="text" placeholder="Address" name="address" value={address} onChange={this.handleInputChange}/>
                
                <div className="column"> 
                <div className="col-md-3"> 
                <input type="text" placeholder="NIC Number" name="idnumber" value={idnumber} onChange={this.handleInputChange}/>
                </div>
                <div className="col-md-3"> 
                <select id="inputState" className="form-control" name="gender" value={gender} onChange={this.handleSelectChange}>
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                </div>
                </div>

                <div className="column"> 
                <div className="col-md-3"> 
                <input type="text" placeholder="Contact Number" name="contactno" value={contactno} onChange={this.handleInputChange}/>
                </div>
                <div className="col-md-3"> 
                <input type="text" placeholder="City" name="city" value={city} onChange={this.handleInputChange}/>
                </div>
                </div>

                <div>
                    <input type="checkbox" name="rescuer" value={rescuer} onChange={this.handleCheckboxChange}/>
                    {/* Rescuer</input> */}
                    <input type="checkbox" name="veterinarian" value={veterinarian} onChange={this.handleCheckboxChange}/>
                    {/* Veterinarian</input> */}
                    <input type="checkbox" name="volunteer" value={volunteer} onChange={this.handleCheckboxChange}/>
                    {/* Volunteer</input> */}
                    </div>
                <input type="email"  placeholder="Email" name="email" value={email} onChange={this.handleInputChange}/>    
                <input type="password"  placeholder="Password" name="password" value={password} onChange={this.handleInputChange}/>
            
                <button type="submit" >Sign in</button>
                </div>
               </form>
               </div>
        )
}
}

export default SignUp



