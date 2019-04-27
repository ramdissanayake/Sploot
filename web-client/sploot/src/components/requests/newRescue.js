import React,{Component} from 'react';
import Stepper from 'react-stepper-horizontal';
import MapSel from '../map/geoSel';
import {reverseGC} from '../map/geoCoder';
import {InputGroup,FormControl} from 'react-bootstrap';
import Image from '../../file/uploader';

export default class NewRescue extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStep = this.handleStep.bind(this);
        this.state ={
            title:"",
            track:true,
            contact:"",
            medical:false,
            lost:false,
            tresspassable:false,
            aggression:false,
            additional:"",
            step:0,
            tracker:[],
            location:"",
            loading:false,
            pictures:[]
            
            
        }
        this.spinner = "/images/markers/Spinner-1s-200px.gif";
        this.marker="/images/markers/marker1.png";
        this.addLocation = this.addLocation.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    addImage(images){
        this.setState((state)=>({
            pictures:state.pictures.concat(images)
        }));
        console.log(this.state.pictures)
    }

    addLocation(latlng){ 
        this.setState({loading:true})
        if(this.state.tracker.length<=0){
            reverseGC(latlng.coordinates).then(response=>{
            //    console.log(response.display_name.split(',')[0]);
               this.setState( (state)=>
            //    Catch error display_name undefined
                   ({location:response.display_name.split(',').slice(0,2),
                    tracker:state.tracker.concat([latlng]),
                    loading:!state.loading
                })
                )
                // console.log(this.state.tracker);
            });
        }
        else{
            reverseGC(latlng).then(response=>{
                //    console.log(response.display_name.split(',')[0]);
                   this.setState( (state)=>
                       ({
                        tracker:state.tracker.concat([latlng])
                    })
                    )
                    // console.log(this.state.tracker);
                });
        }

    }
    
    handleStep(e,dir){
        window.$("#home").tab('show');
        if(this.state.step>=0 && dir===1 && this.state.step<2){
            this.setState(
                (state)=>({
                    step : state.step + dir
                })
            )
                // alert(dir)
        }
        else if(this.state.step<=2 && this.state.step>0 && dir===-1){
            this.setState(
                (state)=>({
                    step : state.step + dir
                })
            )
        }
    }

    handleChange(e){
        var key=e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState(
            {
                [key]: value,
               
            }
        )
        // console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        fetch("api/requests/new",{
            method:'POST',
            headers: {
                // 'auth':,
                'connection':'close',
                'content-type': 'application/json ',
            },
            // convert to  a json object 
            body: JSON.stringify(this.state)
        });
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
                                <input id="location" type="text" class="form-control" placeholder="Location"
                                    value={this.state.location}
                                />
                            </div><br></br>
                        <div class='input-group date' id='datetimepicker1'>
                        <span class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </span>
                        {/* Change Date time picker and Styles */}
                        <input type='date' class="form-control" placeholder="Date and Time DD-MM-YY hh:mm"/>
                        </div>

                    </div>
                    <div class="col-md-8">
                            <MapSel addLocation={this.addLocation}/>
                            <div style={{marginTop:"10px"}}>
                            <a onClick={(e)=>this.handleStep(e,-1)} class="btn btn-primary">Prev</a> 
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
                <div>
                <a onClick={(e)=>this.handleStep(e,-1)} 
                class="btn btn-primary">Prev</a>
                 <a onClick={(e)=>this.handleSubmit(e)} 
                class="btn btn-success">Save!</a>
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
                            <Image addImage = {this.addImage}/>
                    </div>

                    <div className="col-md-8">
                        <div>
                            <a onClick={(e)=>this.handleStep(e,1)} 
                            class="btn btn-success">Next</a>
                        </div>
                    </div>





                </div>


              </div>
          </div>

    const panes =[formPics,
    formLoc,
    formInfo]


        window.$('#home').tab('show');
        return (
            <div className="bodywrapper container-fluid ">
            <div className="Row">
                <div className="col-md-8">
                

            <div class="panel-body content" >
            <div class="row">
                <div class="col-">
                <div class="tab-content">

                    <form onChange={this.handleChange}>
                    {panes[0]}
                        {panes[1]}
                        {panes[2]}
                        /* <div className="tab-pane fade" role="tabpanel" id="home" aria-labelledby="home-tab">
                        {formPics}
                    </div> */}
                        {/* {
                         panes[this.state.step]

                        } */}

                    </form>
                </div>
                </div>
                </div>
            </div>



         
                </div>
                <div className="col-md-4">
                
                <Stepper steps={ [{title: 'Step One: Location'}, {title: 'Step Two: Details '}, {title: 'Step Three: Photos'}] } activeStep={ this.state.step}  />

                 <p>
                     In non labore adipisicing quis dolor. Adipisicing eiusmod non consequat aute consectetur labore esse incididunt quis laboris occaecat nostrud sunt. Ad et veniam officia magna dolor pariatur quis ea adipisicing occaecat magna voluptate. 

              
                 </p>       
                </div>
            </div>            
            </div>
         )
           
        
    }
}