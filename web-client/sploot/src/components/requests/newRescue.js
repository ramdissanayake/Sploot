import React,{Component} from 'react';
import Stepper from 'react-stepper-horizontal';
import Themap from './mapSel';

export default class NewRescue extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleStep = this.handleStep.bind(this);
        this.state ={
            title:"",
            location:"",
            track:true,
            contact:"",
            medical:false,
            lost:false,
            tresspassable:false,
            aggression:false,
            additional:"",
            step:0
        }
    }

    handleStep(e,dir){
        e.preventDefault()
        this.setState(
            (state)=>({
                step : state.step + 1
            })
        )

    }

    handleChange(e){
        var key=e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState(
            {
                [key]: value,
               
            }
        )
        console.log(this.state);
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
            <div id="location" class="panel panel-default">
            <div class="panel-heading">
            Where did you last see the animal?
            </div>
            <div class="panel-body">
                <Themap/>
            </div>
        </div>

      const formInfo =
            <div id="information" class="panel panel-default">
            <div class="panel-heading">
                We need more information about the animal.
            </div>
            <div class="panel-body"></div>
        </div>
        
        const formPics =
              <div id="pictures" class="panel panel-default">
              <div class="panel-heading">
                  Help us recognize the animal better.
              </div>
              <div class="panel-body"></div>
          </div>


        return (
            <div class="container panel panel-default">
            <h1>Report an Animal in Need of Help</h1>
            <div class="row ">
                <Stepper steps={ [{title: 'Step One: Location'}, {title: 'Step Two: Details '}, {title: 'Step Three: Photos'}] } activeStep={ 0}  />
            </div>
            <div class="panel-body">

            <div class="row">
                <div class="col-">
                    <form>
                        {formLoc}
                        {formInfo}
                        {formPics}
                        <button onClick={(e)=>this.handleStep(-1)} class="btn btn-primary">Previous</button>
                        <button onClick={(e)=>this.handleStep(-1)} class="btn btn-primary">Next</button>

                    </form>
                </div>
                </div>
            </div>



            </div>
         
          )
           
        
    }
}