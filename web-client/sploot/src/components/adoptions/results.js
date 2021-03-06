import React,{Component} from 'react';
import RequestCard from './card';



export default class Results extends Component{
      constructor(props){
            super(props);
            this.state = {resultSet:[]}
          
      }

      componentDidMount(){
            fetch('api/adoptions/show/all')
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
            console.log(this.state.resultSet)
            return this.state.resultSet.map(
                 element=>{
                       return <RequestCard id={element}/>
                 }       
            )
      }


      render(){
          return(

            <div className="bodywrapper container">
             <div className="row">
                  <div className="col-md-9">
                  <div class="panel-body content " >
                        <div class="row">
                        <div class="panel  form-pane panel-default">
                               <div class="panel-heading">
                               <div class="row">
                               <div class=" col-xs-12 col-md-9">
                                        <h5 style={{display:'inline'}}>Give them a Forever Home!</h5> 
                                    </div>

                                    <div class="col-xs-12 col-md-3">
                                   <small><a  href="#">Read the Sploot! Animal Adoption Policy</a></small>
                                    </div></div>
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