import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



export default class Themap extends Component {
  
  constructor(props){
    super(props);
    } 

    componentDidMount(){
        this.map =  L.map('map',{
            center:[6.8988,79.8608],
            zoom:15,
        })

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlaGFua3VsZSIsImEiOiJjanVsbXljYmIwbnl5NDVsOG93ZjN6a3MxIn0.M0lV10tb2YDwe5a6UK4pXA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(this.map);
var circle = L.circle([6.8988,79.8608], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 250
}).addTo(this.map);
    }


  render() {
  return(
      <div class="col">
      <div id="map"></div>
      </div>
  );
    
  }
}