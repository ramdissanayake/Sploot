import React,{Component} from 'react';
import Request from './request';
import "../../milestone.css"
import Sticky from 'react-sticky-el';
// import { format } from 'url';
// import Milestone from '../milestones/milestones';
import Login from '../login'
import {server} from "../../config"

export default class RequestView extends Component{
    constructor(props){
        super(props);
        this.request = new Request(this.props.p)
        this.state={
            rescuable:true,
            container:null,
    
        }
    }
    
    
    componentDidMount(){
        console.log(this.props)
        //Set Rescuable--------------------------------------
        if(this.request.getRescuers().length >0){
            this.setState({
                rescuable:false
            })
        }

        // Initiate Milestone Viewer-------------------------
        this.x = document.getElementById('milestones')
        this.request.showMilestones(this.x);
        // --------------------------------------------------

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

      enlarge(e){
            const mainimg = document.getElementById("mainimg");

      
            window.$('#mainimg').addClass("fade-in-left")
            mainimg.src= e.target.src
            setTimeout(function(){
                window.$('#mainimg').removeClass("fafe-inleft")
            },700) 
      }

      profilpicture(){
        if(this.state.images!=undefined){
              if(this.LoadImage().length>0){
           
                  return server+"/requests/"+this.LoadImage()[0]
              }
              else{
               
                  return "/images/errors/noimage.png"
              }
 
        }
     
        }
      
      thumbnails(){

          if(this.state.images!=undefined){
            return this.LoadImage().map(i=>{
                return <img onClick={this.enlarge.bind(this)}className="grow img-thumbnail" width="80px" src={server+"/requests/"+i}/>
            })
          }
      }
    

      makeadopt(){
          console.log(this.props.h.push('/adoptions/new/'+this.props.p._id))
      }
    

    render(){
        return(
            <div  className="bodywrapper container ">
            <div className="row">
                {/* Rescue */}
                <div className="col-md-4">
             
                    <div className="panel form-pane panel-default">
                                        <div className="panel-heading">
                                        <h5 style={{display:'inline'}}> {this.request.getTitle()}</h5> 
                                           
                                        </div>

                                         <div className="viewSidebar panel-body">
                                        {/* Main Picture */}
                                        <div class="mainimg"> 
                                            {this.state.images===undefined?(<div class="card-image lds-ring"><small>Sploot is Working</small><div></div><div></div></div>):
                                            (<img id="mainimg" className="wow fadeIn"  className="" src={this.profilpicture()}/>)

}
                                        </div>

                                        <div>       
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
                </div>




                {/* Rescue Milestones */}
                <div className="col-md-8">
                
               
                <div class="panel milestones form-pane panel-default">
                <div class="panel-heading">
                    <div class="row">
                    <div class=" col-xs-8 col-md-8">
                    <h5 style={{display:'inline'}}>Rescue Timeline</h5> 
                    </div>
                    <div class="col-xs-12 col-md-4">
                    <small><a  href="#">Become a Registered Animal Rescuer</a></small>
                    </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div id = "milestones" className=''>
                        <ul id="milestones-ul">
                        </ul>
                    </div>
                </div>
                
                </div>

                <div style={{minHeight:'0'}}className=" toolbox form-pane panel-default">
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

                <div className="row" >
                <div className="col-sm-5" style={{display:'inline'}}>
                <button className="btn btn-primary" onClick={this.request.assign.bind(this.request,this.state.rescuable)} disabled={!this.state.rescuable}>Rescue Me</button>
                <a className="btn btn-primary">Track Me</a>
                <a className="btn btn-primary">Donate</a>
                </div>



                {/* Make a Seperate Component Which will only be rendered if curr.user is owner */}
                <div className="col-sm-7" >

                <a className="btn btn-primary">Search</a>
                <a className="btn btn-primary" onClick = {this.request.found.bind(this.request)}>Found</a>
                <a className="btn btn-primary" onClick = {this.request.adoptable.bind(this.request,this.makeadopt.bind(this))}>Adoptable</a>
                <a className="btn btn-link " onClick = {this.request.closed.bind(this.request)}>Close this Rescue</a>
                </div>
                {!this.state.rescuable? 
                <div className="col-md-12">
                <hr/>
                    <form className="milestone-div" onSubmit={this.request.newMile.bind(this.request)}>
                    <label><h6>Post Updates</h6></label><br/>
                    <input placeholder="Milestone Title" type="text"/><br/>
                    <textarea  style={{width:"100%"}}></textarea><br/>
                    <button className="btn btn-primary" type="submit">Post</button>
                    </form>
                </div>:null}
                </div>
                </div>

                </div>



                </div>

                
            
            
            </div>
            </div>
//             <div  className=" bodywrapper container ">

//             <div className="row">
//                  <div className="col-md-8">
//                  <div class=" content" >
//                        <div class="row">
//                        <div class="panel   form-pane panel-default">
//                               <div class="panel-heading">
//                                 <div class="row">

//                                     <div class=" col-xs-8 col-md-8">
//                                         <h5 style={{display:'inline'}}>Can You Help Me?</h5> 
//                                     </div>
//                                     <div class="col-xs-12 col-md-3">
//                                    <small><a  href="#">Become a Registered Animal Rescuer</a></small>
//                                     </div>
//                                 </div>
//                               </div>
//                               <div class="panel-body">
//                                     <div className="row">
                                  
//             {/* <Login/>     */}
//                                       {/* Images Here */}
//                                     <div className="col-md-7 col-xs-12 col-sm-4">
//                                         <div className="panel panel-default">
//                                             <div className="panel-heading">
//                                             <h5>{this.request.getTitle()}</h5>
//                                             </div>

//                                             <div className="panel-body">
//                                         {/* Main Picture */}
//                                         <img width="300px" className="" src={"http://localhost:3000/requests/"+
//                                         (this.state.images!=undefined?this.LoadImage()[0]:'sd')}/>


//                                         {/* Thumbnails */}
//                                         <div  style={{width:'100%',marginBottom:'10px'}}>
//                                             {this.thumbnails()}
//                                         </div>

//                                         {/* Location */}
//                                            <h6>
//                                             <i className="fa fa-map-marker"/> {this.request.getLocation()}
//                                             {/* <a class="btn btn-primary">Update</a> */}
//                                             </h6> 

//                                         {/* Contact Person */}
//                                             <h6>
//                                                 <i className="fa fa-phone"/> {this.request.getContact()}
//                                                 {/* <a class="btn btn-primary">Update</a> */}
//                                             </h6> 

//                                         {/* Additional Details */}
//                                             <small>
//                                             {this.request.getAdditional()}
//                                             </small>

//                                             </div>
//                                         </div>
                                    
//                                     </div>

//                                     <div className="col-md-5 col-xs-12 col-sm-8">
//                                         <div class="panel panel-default">
//                                             <div class="panel-heading">
//                                                Rescue Milestones
//                                             </div>
//                                             <div  class="milestones panel-body">
//                                             <Sticky>

//                                             <form onSubmit={this.request.newMile.bind(this.request)}>
//                                                                 <input placeholder="Milestone Title" type="text"/><br/>
//                                                                 <textarea ></textarea><br/>
//                                                                 <button className="btn btn-primary" type="submit">Post</button>
//                                                             </form>
//                                             </Sticky>
//                                             <div id = "milestones" className='verticalLine'>
                                       
//                                             </div>
//                                             </div>

//                                         </div>
                                   
//                                     </div>

//                                     </div> {/*Close Row*/}
                                 
//                               </div>
//                        </div>
//                        </div>
//                  </div>
//                  </div>
//                                     <div className="col-md-4">
//                                     <Sticky className="floatingpane ">

                                        

// </Sticky>
//                                     </div>
//            </div>
//            </div>

        )
    }

}