import React,{Component} from 'react';
import { Button } from 'reactstrap';

export default class Result extends Component{
    constructor(props){
        super(props);
        this.state={image:""};
   
    }
    componentDidMount(){
      fetch('https://dog.ceo/api/breed/Dachshund/images/random')
      .then(response=>(response.json()))
      .then(myJson => {
        console.log(JSON.stringify(myJson.status));
        this.setState({image:myJson.message});
      })
      // .catch(this.state.image="");
    }
    
    
    
    render(){

      return(
        <article class="br2 ba dark-gray b--black-10 grow cover mv4 w-100 w-50-m w-25-l mw5 center hide-child">
  <section class="pa2  absolute">
     <Button size="sm" className=" f6 link dim  mb2 dit white child " color="success">
        Adopt 
     </Button>
     <Button size="sm" className="f6 link dim ml1  mb2 dit white child " color="info">
        Watch 
     </Button>         

  </section>
    <img width="200px" height="150px" src={this.state.image} class="db  bg-white w-250 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div class="pa2 bg-white ph3-ns pb3-ns">
    
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f5 f4-ns mv0">{this.props.id}</h1>
      </div>
      <div class="dtc tr">
      {this.props.image}
        <h2 class="f5 mv0">{this.props.image}</h2>
      </div>
    </div>
    <p class="f6 lh-copy measure mt2 mid-gray">
      {this.props.shortDes}
    </p>
  </div>
</article>
        )
    }
}