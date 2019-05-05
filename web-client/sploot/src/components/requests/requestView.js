import React,{Component} from 'react';
import Request from './request';
import { format } from 'url';

export default class RequestView extends Component{
    constructor(props){
        super(props);
        this.request = new Request(this.props.p)
        this.state={
            rescuable:true
        }
    }


    componentDidMount(){
        this.request.getImage().then(
            response=>{
              this.setState({
                images:response
              })
            }
          )
          window.scrollTo(0, 0)
    }

    // Loads the Profile Picture
    LoadImage(){
        var images=[]
        // hard coded for convenienceproxy to a static serving end point
        if(this.state.images!=undefined){
            this.state.images.map(i =>{
                images.push(
                    this.request.getStamp()+'-' + i
                )
            })
            return images; 
        }
        else{
            return null
        }
      }
      
      thumbnails(){
          if(this.state.images!=undefined){
            return this.LoadImage().map(i=>{
                return <img className="grow img-thumbnail" width="80px" src={"http://192.168.8.100:3000/requests/"+i}/>
            })
          }
      }
    






    render(){
        return(
            <div style={{paddingTop:'70px'}} className=" bodywrapper container-fluid ">
            <div className="row">
                 <div className="col-md-10">
                 <div class="panel-body content" >
                       <div class="row">
                       <div class="panel   form-pane panel-default">
                              <div class="panel-heading">
                                <div class="row">

                                    <div class=" col-xs-12 col-md-9">
                                        <h5 style={{display:'inline'}}>Can You Help Me?</h5> 
                                    </div>
                                    <div class="col-xs-12 col-md-3">
                                   <small><a  href="#">Become a Registered Animal Rescuer</a></small>
                                    </div>
                                </div>
                              </div>
                              <div class="panel-body">
                                    <div className="row">
                                  
                                      {/* Images Here */}
                                    <div className="col-md-4 col-xs-12 col-sm-4">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                            <h5>{this.request.getTitle()}</h5>
                                            </div>

                                            <div className="panel-body">
                                        {/* Main Picture */}
                                        <img width="300px" className="" src={"http://192.168.8.100:3000/requests/"+
                                        (this.state.images!=undefined?this.LoadImage()[0]:'sd')}/>


                                        {/* Thumbnails */}
                                        <div  style={{width:'100%',marginBottom:'10px'}}>
                                            {this.thumbnails()}
                                        </div>

                                        {/* Location */}
                                           <h6>
                                            <i className="fa fa-map-marker"/> {this.request.getLocation()}
                                            {/* <a class="btn btn-primary">Update</a> */}
                                            </h6> 

                                        {/* Contact Person */}
                                            <h6>
                                                <i className="fa fa-phone"/> {this.request.getContact()}
                                                {/* <a class="btn btn-primary">Update</a> */}
                                            </h6> 

                                        {/* Additional Details */}
                                            <small>
                                            {this.request.getAdditional()}
                                            </small>

                                            </div>
                                        </div>
                                    
                                    </div>

                                    <div className="col-md-8 col-xs-12 col-sm-8">

                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                <div className="row">

                                                <div class=" col-xs-12 col-md-10">
                                                    How Can You Help Me?
                                                </div>

                                                <div class="col-xs-12 col-md-2">
                                                <small><a  href="#">Learn More</a></small>
                                                </div>
                                                    
                                                </div>



                                                </div>
                                                <div className="panel-body">
                                                    <a className="btn btn-primary" disabled={!this.state.rescuable}>Rescue Me</a>
                                                    <a className="btn btn-primary">Track Me</a>
                                                    <a className="btn btn-primary">Donate</a>
                                                    {/* <a className="btn btn-primary " >Adopt Me</a> */}
                                                </div>
                                            </div>
                                         

                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                               Rescue Milestones
                                            </div>

                                            <div class="panel-body">
                                            <div className='verticalLine'>
                                                {this.request.showMilestones()}
                                            </div>
                                            </div>

                                        </div>
                                   
                                    </div>
                                    </div> {/*Close Row*/}
                                 
                              </div>
                       </div>
                       </div>
                 </div>
                 </div>
           </div>
           </div>

        )
    }

}