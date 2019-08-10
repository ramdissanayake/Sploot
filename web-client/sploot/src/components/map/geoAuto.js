import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
var accesstoken = 'bfab21a963bcf0';

export default class Autocomplete extends Component{
	constructor(props){
		super(props)
		this.state={
			query:'',
			results :[{display_place:'No Results Found',address:{}}]
		}
	}

	componentDidUpdate(prevProps) {
		if(this.props.query !== prevProps	.query){
    	this.setState({query: this.props.query})
    	this.fetchData();
		}
  	}

  	go(e,latlng){

  		this.props.flyto(latlng)
  	}

	fetchData(){
		let suggestion =[]
		if(this.props.query !=""){
		 fetch('https://api.locationiq.com/v1/autocomplete.php?key=bfab21a963bcf0&q='+this.state.query+'&countrycodes=lk&limit=10')
		.then(response=>response.json())
		.then(response=>{
			
			try{		
			return response.forEach(i=>{

	
				if(response){
					suggestion=[]
					response.forEach(res=>{
	
						suggestion.push(res)
					})
				}
					console.log(suggestion)
					this.setState({
						results:suggestion
					})
			})
			}
			catch(err){
				console.log(err)
			}
			
		})
		}



	}

	viewList(){
		// return this.state.results
		return this.state.results.map((value,key)=>{
			return (<li className="suggestionls fade-in-bck ">
			<a onClick={(e)=>this.go(e,[value.lat,value.lon])}>{value.display_place}</a><br/>
			<small>{value.address.city}</small>
			</li>)
		})
	}

	render(){
		return(

				<div>
				{this.viewList()}
				</div>

			)
	}
}