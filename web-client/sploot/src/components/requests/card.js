import React from 'react';


class RequestCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {image:"0"}
    }

    componentDidMount(){
        fetch(`api/requests/show/`+this.props.id)
        .then(response=>(response.json()))
        .then(currRequest => {
            // console.log(myJSON); 
            this.setState({
                title:[currRequest.title],
                location:[currRequest.location],
                description:[currRequest.additional]
            }) 

            })
        
    }

    render(){
        return (
            // todo Use card templates to generate responsive cards

                
                <article class="br2 ba dark-gray b--black-10 grow cover mv4 w-100 w-50-m w-25-l mw5 center hide-child">

    <img  src="http://placekitten.com/g/0300/150" class="db  bg-white w-250 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div class="pa2 bg-white ph3-ns pb3-ns">
    
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f5 f4-ns mv0">{this.state.title}</h1>
      </div>
     
    </div>
    <p class="f6 lh-copy measure mt2 mid-gray">
      {this.state.description}
    </p>
  </div>
</article>
                
    
          );
    }
} 





export default RequestCard;
