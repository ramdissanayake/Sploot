import React, {
    Component
} from 'react';

import Stepper from 'react-stepper-horizontal';
import MapSel from '../map/geoSel';
import {
    reverseGC
} from '../map/geoCoder';



import Uploader from '../../file/uploader';
import Request from './request';
import { array } from 'prop-types';

export default class NewRescue extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStep = this.handleStep.bind(this);
        this.state = {
            title: "", //send
            track: true, //send
            contact: "", //send
            medical: false, //send
            lost: false, //send
            tresspassable: false, //send
            aggression: false, //send
            additional: "", //send
            step: 0,
            tracker: [], //send
            location: "",
            loading: false,
            pictures: [], //send
            timestamp: "", //ok
            picurl:[]

        }
        
        this.spinner = "/images/markers/Spinner-1s-200px.gif";
        this.marker = "/images/markers/marker1.png";
        this.addLocation = this.addLocation.bind(this);
        this.addImage = this.addImage.bind(this);
        this.request = new Request;
    }

    componentDidMount(){
        this.$ = window.$;
        
    }

    addImage(image,url) {
        this.setState((state) => ({
            pictures: state.pictures.concat(image),
            picurl:state.picurl.concat(url)
        }));

    }

    listfiles() {
        return this.state.picurl.map(picture => {
            return ( <
                img className = "thumbnail"
                src = {
                    picture
                }
                width = "120px" / >

            )

        })
    }

    addLocation(latlng) {
        this.setState({
            loading: true,
            timestamp: latlng.timestamp[0] + " " + latlng.timestamp[1],
        })
        
        // console.log(latlng);
        if (this.state.tracker.length <= 0) {
            reverseGC(latlng.coordinates).then(response => {
                //    console.log(response.display_name.split(',')[0]);
                this.setState((state) =>
                    //    Catch error display_name undefined
                    ({
                        location: response.display_name.split(',').slice(0, 2),

                        tracker: state.tracker.concat(JSON.stringify([latlng.coordinates,latlng.timestamp])),
                        loading: !state.loading
                    })
                )
            });
        } else {
            reverseGC(latlng).then(response => {
                //    console.log(response.display_name.split(',')[0]);
                this.setState((state) =>
                    ({
                        tracker: state.tracker.concat([latlng])
                    })
                )
                // console.log(this.state.tracker);
            });
        }

    }

    handleStep(e, dir) {
        var step = this.state.step + dir;
        const tabs = ['#tab0','#tab1','#tab2'];
        // alert(tabs[step])
        window.$(tabs[step]).tab('show');
        window.$(tabs[step-1]).parent().addClass('completed');
        
        if (this.state.step >= 0 && dir === 1 && this.state.step < 2) {
            this.setState(
                (state) => ({
                    step: state.step + dir
                })
            )
            // alert(dir)
        } else if (this.state.step <= 2 && this.state.step > 0 && dir === -1) {
            this.setState(
                (state) => ({
                    step: state.step + dir
                })
            )
        }

       
    }

    handleChange(e) {
        var key = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [key]: value,

        })
        // console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target)
        const payload = new FormData(e.target);

        payload.append('tracker',this.state.tracker);
        payload.append('stamp',Date.now())
        this.state.pictures.map((pic,index) => (
            payload.append('picture',pic)
        ))
        this.request.newRequest(payload);
    }

    render() {
  
        const formLoc =
            <div id="location" class="panel form-pane panel-default">
                <div class="panel-heading">
                Where did you last see the animal?
                </div>

                <div class="panel-body">
                    <div class="row">
               
                    <div class="col-md-4">
                        <p>Tell us where you last saw the Animal you want to report to Sploot Rescuers.</p>
                            <div class="input-group">
                                <span class="input-group-addon"><span>
                                <img width="20px" src={(!this.state.loading?this.marker:this.spinner)}/>
                                </span></span>
                                <input id="location" name="location" type="text" class="form-control" placeholder="Location"
                                    value={this.state.location}
                                />
                            </div><br></br>
                        <div class='input-group date' id='datetimepicker1'>
                        <span class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </span>
                        {/* Change Date time picker and Styles */}
                        <input type='text' name="timestamp" class="form-control" placeholder="Date and Time DD-MM-YY hh:mm" value={this.state.timestamp}/>
                        </div>

                    </div>
                    <div class="col-md-8">
                            <MapSel addLocation={this.addLocation}/>
                            <div style={{marginTop:"10px"}}>
                            
                        <a onClick={(e)=>this.handleStep(e,1)} 
                        class="btn btn-success">Next</a>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

      const formInfo =
            <div id="information" class="panel form-pane panel-default">
            <div class="panel-heading">
                We need more information about the animal.
            </div>
            <div class="panel-body">
                <div className="row">
                <div className="col-md-6">

                <div class="input-group">
                <span class="input-group-addon"><span>
                Title
                </span></span>
                <input onChange={this.handleChange} name="title" id="location" type="text" class="form-control" 
                    placeholder={"ex: Animal near " + this.state.location[1] + " needs help"} 
                    />
                </div>

                <br></br>
                <div>

                <div class="input-group" >
                    <span class="input-group-addon" style={{width:"55px"}}><span>
                    <i className="fa fa-phone"></i>
                    </span></span>
                    <input onChange={this.handleChange} name="contact" id="contact" type="text" class="form-control"/>
                </div>
                  Sign Up With Sploot and Protect Your Privacy While Still Helping Animals (ADD SIGN UP BUTTON)
              
                </div>
                
                <div class="form-group">
                <br></br>
                 <label class="label label-primary" for="comment">Additional Details:</label>
                <textarea onChange={this.handleChange} name="additional" class="form-control" rows="5" id="comment"></textarea>
                    </div> 


                <div>

                </div>




                </div>

                <div className="col-md-6">
                    
                <label>
                <input name="track" checked={this.state.track} type="checkbox" class="" id="defaultUnchecked"/>
                <span>Request Others to Track this Animal</span>
                </label>

                <label>
                <input name="medical" type="checkbox" class="" id="defaultUnchecked"/>
                <span>The Animal is in Need of Medical Attention</span>
                </label>

                <label>
                <input name="lost" type="checkbox" class="" id="defaultUnchecked"/>
                <span>The Animal appears to be a lost Pet</span>
                </label>

                <label>
                <input name="trespassable" type="checkbox" class="" id="defaultUnchecked"/>
                <span>The Animal is on Private Property</span>
                </label>
                
                <label>
                <input name="agression" type="checkbox" class="" id="defaultUnchecked"/>
                <span>The Animal appears to be a lost Pet</span>
                </label>
                
                    <div>
                    <a onClick={(e)=>this.handleStep(e,-1)} 
                    class="btn btn-primary">Prev</a>
                    <button 
                    type="submit" 
                    class="btn btn-success">Save!</button>
                    </div>
                </div>

                </div>

            </div>
        </div>
        
        const formPics =
              <div id="pictures" class="panel  form-pane panel-default">
              <div class="panel-heading">
                  Show us the Animal
              </div>
             <div class="panel-body">
                <div className="row">

                    <div className="col-md-4">
                        <p>
                            <b>
                            Add Clear Images of the Animal.
                            </b><br></br>
                            <small>
                            These images will help the rescuers identify and pre-examine the condition of the animal before dispatching help. 
                            </small> 
                        </p>
                            <Uploader addImage = {this.addImage}/>
                    </div>

                    <div className=" col-md-8">
                        <div className="imPreview">
                        {this.listfiles()}
                        </div>
                        <a style={{marginTop:"10px"}} onClick={(e)=>this.handleStep(e,-1)} class="btn btn-primary">Prev</a> 
                            <a style={{marginTop:"10px"}} onClick={(e)=>this.handleStep(e,1)} 
                            class="btn btn-success">Next</a>
                    </div>






                </div>

              </div>
          </div>

    const panes =[
    formLoc,formPics,
    formInfo]


        
        return (
            <div className="bodywrapper container-fluid ">
            <div className="row">
                <div className="col-md-8">
                

            <div class="panel-body content" >
            <div class="row">
                <div class="col">

             

                    <form id="requestForm" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                 
             
                <div class="tab-content">
                    <div class=" tab-pane  in active" id="pane0">
                        {panes[0]}
                    </div>
                    <div class="tab-pane " id="pane1">
                        {panes[1]}
                    </div>
                    <div class="tab-pane " id="pane2">
                        {panes[2]}
                    </div>
                     
                   

                </div>
                </form>

                    
                </div>
                </div>
            </div>



         
                </div>
                <div className="col-md-4" style={{display:'inline-flexbox'}}>
                <ul class="nav" id="step" >
                    <li><a class="completed step" data-toggle="tab" id="tab0" href="#pane0">
                    1</a>
                    <span >Step1: Location</span>
                    </li>
                    <li><a className="step" data-toggle="tab" id="tab1" href="#pane1">2</a>
                    <span >Step2: Photos</span></li>
                    <li><a className="step" data-toggle="tab" id="tab2" href="#pane2">3</a>
                    <span >Step3: Details</span>
                    </li>
                </ul>
                {/* <Stepper steps={ [{title: 'Step One: Location'}, {title: 'Step Two: Details '}, {title: 'Step Three: Photos'}] } activeStep={ this.state.step}  /> */}
                    
                 <p>
                     In non labore adipisicing quis dolor. Adipisicing eiusmod non consequat aute consectetur labore esse incididunt quis laboris occaecat nostrud sunt. Ad et veniam officia magna dolor pariatur quis ea adipisicing occaecat magna voluptate. 

              
                 </p>       
                </div>
            </div>            
            </div>
         )
           
        
    }
}