import React, { Component } from 'react'

export default class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {size: 3}
    this.state = {
        Arr: []
    }
  }
  // btnClick(){
  //   alert('---')
  // //  this.setState({data: 'nannsd'});
  //    this.state ={data: 'sds'};
  // }


  componentDidMount(){
      let results = []
    fetch('api/requests/search/',{
        'method':'POST',
        "body": "*"
      })
      .then(response=>(response.json()))
      .then(myJSON=>{
                myJSON.forEach(element => {
                    results.push(element)
                });
            this.setState({
                Arr:results
            })
         
           })

           
           
  }

  populate(){
      console.log(this.state.Arr)
   return this.state.Arr.map((i,k)=>{

       return <tr>
        <td>
            {k}
        </td>
       <td>
       {i.stamp}
       </td>

       <td>
           {i.location.split(',')[0,1]}
       </td>
       <td>
           {i.rescuers[0]}
       </td>
       <td>
           {i.title}
       </td>
       <td>
           <button class="btn" style={{backgroundColor:"Green"}}>Assign</button>
           {/* {this.state.data}
           <button onClick={this.btnClick}>click</button> */}
       </td>
       </tr>
   })
  }
  render(){
    
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 board">
              
            <table id="simple-board">
                <thead>
                    <th>No</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Rescues</th>
                    <th>Title</th>
                    <th>Assign</th>
                </thead>
               <tbody>
               {
                    this.populate()
                    
      
                }
               </tbody>
             </table>
          </div>
        </div>
      </div>
    )
  }
}