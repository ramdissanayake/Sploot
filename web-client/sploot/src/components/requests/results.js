import React,{Component} from 'react';
import RequestCard from './card';



export default class Results extends Component{
      constructor(props){
            super(props);
            this.state = {resultSet:[]}
          
      }

      componentDidMount(){
            fetch('api/requests/show/all')
            .then(response=>(response.json()))
            .then(myJSON=>{
                  console.log(myJSON);
                  myJSON.forEach(element=>{
                        this.state.resultSet.push(element._id);
                        // console.log(element._id);
                        this.setState((state)=>(
                              {
                                    resultSet: state.resultSet 
                              }
                        )
                        );
                        
                        
                  }
                  )
             
            })
      }

      populate(){
            return this.state.resultSet.map(
                 element=>{
                       return <RequestCard id={element}/>
                 }       
            )
      }


      render(){
          return(

            <div className="bodywrapper container-fluid ">
             <div className="row">
                  <div className="col-md-10">
                  <div class="panel-body content" >
                        <div class="row">
                        <div class="panel  form-pane panel-default">
                               <div class="panel-heading">
                                    <h5 style={{display:'inline'}}>Can You Help Them?</h5> 
                                    <small style={{float:'right'}}><a  href="#">Become a Registered Animal Rescuer</a></small>
                               </div>
                               <div class="panel-body">
                                    {this.populate()}
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