import React from 'react';
import Request from './request';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
class RequestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    }
  }

  componentDidMount() {
    fetch(`api/requests/show/` + this.props.id)
      .then(response => (response.json()))
      .then(currRequest => {
 
        this.request = new Request(currRequest);
        var image = this.request.getImage().then(
          response=>{
            this.setState({
              image:response[0]
            })
          }
        )
        this.setState({
          image:image,
          stamp:[currRequest.stamp],
          title: [currRequest.title],
          location: [currRequest.location],
          description: [currRequest.additional]
          
        })

        
      })

  }

  cardImage(){
    // hard coded for convenienceproxy to a static serving end point
    var filename = this.state.stamp + '-' + this.state.image+'.png';
    return "http://localhost:3000/requests/"+filename
  }

  render() {
    return (
      // todo Use card templates to generate responsive cards
      <div class=" col-md-3 col-xs-6">
      <div class = "thumbnail h-200" >
      <img src={this.cardImage()} alt="Sploot!"/>
      <div class = "card-body" >
      <h5 class = "card-title" > {
        this.state.title
      } </h5> <p class = "card-text" > {
        this.state.description
      }</p> 
      <Link to = {"requests/"+this.state.stamp}
      class = "btn btn-success" > Rescue </Link> 
      </div></div>
    
      </div> 





    );
  }
}





export default RequestCard;