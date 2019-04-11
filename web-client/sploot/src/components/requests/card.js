import React from 'react';



class RequestCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {image:"0"}
    }

    componentDidMount(){
        fetch(`api/requests/location/all`)
        .then(response=>(response.json()))
              .then(myJson => {
               this.setState({image:JSON.stringify(myJson.body)});
               
                // this.setState({image:myJson.message});
     
              })
        
    }
    render(){
        return (
            <div>
               ss {this.state.image};    
            </div>
        
          );
    }
} 





export default RequestCard;
