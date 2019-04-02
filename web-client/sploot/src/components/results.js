import React,{Component} from 'react';
import Result from './results/result'
import {Row,Col,Container} from 'reactstrap';


export default class Results extends Component{
    constructor(props){
        super(props);
        this.state = {image:""};
    }
    componentDidMount(){
        // console.log(this.props.location);
 
    }
    populate(){
        let result=[1,2,3,4,5,6,74,5,6,7];
        return result.map(
            (i)=>{

                // console.log(this.state.image)
                return  <div className="dit ma2"><Result id={i} /></div>
            }
        )
    }
    render(){
          return(
                



                        <section class="mw12 mw12-ns center bg-light-grey pa3 ph5-ns">
                          {this.populate()}
                        </section>

                
          )
           
        
    }
}