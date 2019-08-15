import React, { Component } from 'react'

export default class Adoptions extends Component {
  constructor(props){
    super(props);
    this.state = {size: 3}
    this.state = {
        Arr: []
    }
  }

  componentDidMount(){
      let results = []
    fetch('api/adoption/search/',{
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
            {i.name}
           
       </td>
       <td>
            {i.species}
           
       </td>
       <td>
            {i.breed}
           
       </td>
       {/* <td>
    
            {i.specialneeds.split(',')[0,1]}
           
       </td> */}
       <td>
            {i.specialneeds[0]}
       </td>
       <td>
            {i.terminal[0]}
       </td>
       <td>
            {i.additional}
       </td>
       {/* <td>
           <button class="btn" style={{backgroundColor:"Green"}}>Assign</button>
       </td> */}
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
                    <th>Name</th>
                    <th>species</th>
                    <th>breed</th>
                    <th>specialneeds</th>
                    <th>terminal</th>
                    <th>additional</th>
                    
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