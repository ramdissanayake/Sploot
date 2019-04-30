import React,{Component} from 'react';
import RequestCard from './card';
import { Container, Row, Col } from 'reactstrap';


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
                       return <div ><RequestCard id={element}/></div>
                 }       
            )
      }


      render(){
          return(
      
            <div class="container">
            <h1>Animals in Need of Rescue</h1>
            <div class="row " style={{disply:"flex",flexWrap:"wrap"}}>
                 {this.populate()}
            </div>
            </div>
     
  
          )
    }
}