import React from 'react';
import Animal from './adoption';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
class RequestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "0000000"
    }
  }

  componentDidMount() {
    fetch(`api/adoptions/show/` + this.props.id)
      .then(response => (response.json()))
      .then(currRequest => {
 
        this.request = new Animal(currRequest);
        var image = this.request.getImage().then(
          response=>{
            this.setState({
              image:response[0]
            })
          }
        )
        this.setState({
          currRequest:currRequest,
          // image:image,
          id:[currRequest._id],
          stamp:[currRequest.stamp],
          name: [currRequest.name],
          location: [currRequest.location],
          description: [currRequest.additional]
          
        })

        
      })

  }

  cardImage(){
    // hard coded for convenienceproxy to a static serving end point
    if(this.state.image!=undefined){
      var filename = this.state.stamp + '-' + this.state.image;
      return "http://localhost:3000/requests/"+filename
    }
    else{
      return "https://placedog.net/500"
    }
  }

  render() {

    return (
      // todo Use card templates to generate responsive cards
      <div class=" fade-in-bck col-md-4 col-sm-4 col-xs-12">
      <div class = "thumbnail h-100" >

      {this.state.image=="0000000"?
      <div class="card-image lds-ring"><small>Sploot is Working</small><div></div><div></div></div>
      :
      <div className="img-hover-zoom--quick-zoom cardimg">
      <img  src={this.cardImage()} alt="Sploot!"/>
    </div>
      }
      


      <div class = "card-body" >
      <h5 class = "card-title" > {
       this.state.name!=""?this.state.name:"No Name Found"
      } </h5> 
      {/* <p class = "card-text" > {
        this.state.description
      }</p>  */}
      <Link to = {"adoptions/"+this.state.id}
      class = "btn btn-success" > Adopt </Link> 
      </div></div>
    
      </div> 





    );
  }
}





export default RequestCard;