import React from 'react';


class RequestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "0"
    }
  }

  componentDidMount() {
    fetch(`api/requests/show/` + this.props.id)
      .then(response => (response.json()))
      .then(currRequest => {
        // console.log(myJSON); 
        this.setState({
          title: [currRequest.title],
          location: [currRequest.location],
          description: [currRequest.additional]
        })

      })

  }

  render() {
    return (
      // todo Use card templates to generate responsive cards
      <div class="col-xs-6 col-md-3">
      {/* <article class = "grow" > */}
      <div class = "thumbnail h-200" >
      <img src="http://placekitten.com/g/0300/150" alt="..."/>
      <div class = "card-body" >
      <h5 class = "card-title" > {
        this.state.title
      } </h5> <p class = "card-text" > {
        this.state.description
      }</p> 
      <a href = "#"
      class = "btn btn-primary" > Rescue </a> 
      </div></div>
       {/* </article> */}
      </div> 



      //     <img  src="http://placekitten.com/g/0300/150" class="db  bg-white w-250 br2 br--top" alt="Photo of a kitten looking menacing."/>
      //   <div class="card">

      //     <div class="dt w-100 mt1">
      //       <div class="dtc">
      //         <h1 class="f5 f4-ns mv0">{this.state.title}</h1>
      //       </div>

      //     </div>
      //     <p class="f6 lh-copy measure mt2 mid-gray">
      //       {this.state.description}
      //     </p>
      //   </div>
      // </article>


    );
  }
}





export default RequestCard;