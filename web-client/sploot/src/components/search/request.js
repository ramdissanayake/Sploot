import React, {Component} from 'react';
import './search.css'
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
      this.preProcessQuery()
    }

    preProcessQuery(e){
      if(e!=undefined){e.preventDefault()}
     
     var results=[]
     fetch('api/requests/show/all')
     .then(response=>(response.json()))
     .then(myJSON=>{
     
              myJSON.forEach(element=>{
                console.log(element._id);
                results.push(element._id)
              })
              this.props.getResults(results);
          })



          console.log(results)
    
    
    }

    subscribe(e){
      e.preventDefault();
      console.log(e.target.parentNode.parentNode.parentNode.parentNode)
    }


    render(){
        return(

            <div class=" search-pane panel  form-pane panel-default">
            <div class="panel-heading">
                Search on Sploot
            </div>
            <div class="panel-body search-body">
            <form onSubmit={this.preProcessQuery.bind(this)} className="search form-horizontal">
  <fieldset>
  
    {/* Prepended text*/}
    <div className="form-group">
      <label
        className="col-md-12 control-label"
        htmlFor="prependedtext"
      />
      <div className="col-md-12">
        <div className="input-group">
          {/* <span className="input-group-addon">Search</span> */}
          <input
            id="prependedtext"
            name="prependedtext"
            className="form-control"
            placeholder="Eg: Sick Dogs Near Nugegoda"
            type="text"
          />
        </div>
      </div>
    </div>
    {/* Button (Double) */}
    <div className="form-group">
      <label className="col-md-12 control-label" htmlFor="search" />
      <div className="col-md-12 col-sm-12 col-xs-12">
            
        <button id="search" type="submit" name="search" className="btn btn-primary">
          Search
        </button>
             
        <button type="button" onClick ={this.subscribe.bind(this)} name="subscribe" className="btn btn-danger">
        Subscribe
        </button>
        <a class="btn btn-link" id="advancedbtn" data-toggle="collapse" data-target="#advanced" >Advanced</a>
      </div>
    </div>

    <div className="collapse" id="advanced">

  
    {/* Multiple Radios */}
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="location">
        Location
      </label>
      <div className="col-md-8">
        <div className="radio">
          <label htmlFor="location-0">
            <input
              type="radio"
              name="location"
              id="location-0"
              defaultValue="NEAR"
              defaultChecked="checked"
            />
            Nearby
          </label>
        </div>
        <div className="radio">
          <label htmlFor="location-1">
            <input
              type="radio"
              name="location"
              id="location-1"
              defaultValue="ANY"
            />
            Any
          </label>
        </div>
      </div>
    </div>
    {/* Multiple Radios */}
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="located">
        Animal
      </label>
      <div className="col-md-8">
      <div className="radio">
          <label htmlFor="located-00">
            <input
              type="radio"
              name="located"
              id="located-0"
              defaultValue={1}
              defaultChecked="checked"
            />
            Any
          </label>
        </div>
        <div className="radio">
          <label htmlFor="located-0">
            <input
              type="radio"
              name="located"
              id="located-1"
              defaultValue={2}
             
            />
            Needs to be Tracked
          </label>
        </div>
        <div className="radio">
          <label htmlFor="located-1">
            <input
              type="radio"
              name="located"
              id="located-2"
              defaultValue={3}
            />
            Has been Located
          </label>
        </div>
      </div>
    </div>
    {/* Multiple Radios */}
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="rescuer">
        Rescuer
      </label>
      <div className="col-md-8">
        <div className="radio">
          <label htmlFor="rescuer-0">
            <input
              type="radio"
              name="rescuer"
              id="rescuer-0"
              defaultValue="Res"
              defaultChecked="checked"
            />
            Unassigned
          </label>
        </div>
        <div className="radio">
          <label htmlFor="rescuer-1">
            <input
              type="radio"
              name="rescuer"
              id="rescuer-1"
              defaultValue="NoRes"
            />
            Assigned
          </label>
        </div>
      </div>
    </div>
    {/* Multiple Checkboxes */}
    <div className="form-group">
      <label className="col-md-4 control-label" htmlFor="other">
        Other Filters
      </label>
      <div className="col-md-8">
        <div className="checkbox">
          <label htmlFor="other-0">
            <input
              type="checkbox"
              name="other"
              id="other-0"
              defaultValue={1}
            />
            Urgent
          </label>
        </div>
        <div className="checkbox">
          <label htmlFor="other-1">
            <input
              type="checkbox"
              name="other"
              id="other-1"
              defaultValue={2}
            />
            Include Closed Requests
          </label>
        </div>
      </div>
    </div>

 
    
    </div>
  </fieldset>
</form>





            </div>
            </div>
         
        )
    }
}