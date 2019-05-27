import React,{Component} from 'react';
import RequestCard from './card';
import Search from '../search/request'


export default class Results extends Component{
      constructor(props){
            super(props);
            this.state = {resultSet:[]}
          
      }

      // componentDidMount(){
      //       fetch('api/requests/show/all')
      //       .then(response=>(response.json()))
      //       .then(myJSON=>{
      //             console.log(myJSON);
      //             myJSON.forEach(element=>{
      //                   this.state.resultSet.push(element._id);
      //                   // console.log(element._id);
      //                   this.setState((state)=>(
      //                         {
      //                               resultSet: state.resultSet 
      //                         }
      //                   )
      //                   );
                        
                        
      //             }
      //             )
             
      //       })
      // }

      getResults(results){
            this.setState({
                  resultSet:[]
            },function(){

                  console.log(results)
                  results.forEach(element=>{
                        this.state.resultSet.push(element);
                        this.setState((state)=>(
                              {
                                    resultSet: state.resultSet 
                              }));
                        })
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
                  <div className="col-md-4  ">
                        <Search getResults={this.getResults.bind(this)}/>
                  </div>

                  <div className="col-md-8">
                  <div class="panel-body content " >
                        <div class="row">
                        
                        <div class="panel  form-pane panel-default">
                               <div class="panel-heading">
                               <div class="row">
                               
                               <div class=" col-xs-12 col-md-8">
                                        <h5 style={{display:'inline'}}>Can You Help Them?</h5> 
                                    </div>

                                    <div class="col-xs-12 col-md-4">
                                   <small><a  href="#">Become a Registered Animal Rescuer</a></small>
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