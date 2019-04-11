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
                  // console.log(myJSON);
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
                       return <div className="dit ma2"><RequestCard id={element}/></div>
                 }       
            )
      }


      render(){
          return(
         
            <section class="mw12 mw12-ns pl3 center bg-light-grey pa3 ph5-ns">
                 {this.populate()}
           </section>
     
  
          )
    }
}