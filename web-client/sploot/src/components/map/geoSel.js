import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default class MapSel extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      marker:false, 
      dt_prompt:false,
      timeset:false,
      timestamp:"[]",
      mapload:"Sploot Needs Location Access to Show the most relavent Map Section. If Not Allowed will fallback to Colombo"
    }
    
  }

  showmap(myposition,zoom){
    this.map = L.map('map').setView([myposition[0], myposition[1]], zoom) 
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlaGFua3VsZSIsImEiOiJjanVsbXljYmIwbnl5NDVsOG93ZjN6a3MxIn0.M0lV10tb2YDwe5a6UK4pXA',{ 
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
    }).addTo(this.map)


    // this.map = L.map('map', {
    //   // Set Center to nearest location
    //   center: [myposition[0], myposition[1]],
    //   zoom: 15,
    // })
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlaGFua3VsZSIsImEiOiJjanVsbXljYmIwbnl5NDVsOG93ZjN6a3MxIn0.M0lV10tb2YDwe5a6UK4pXA', 
    // {
    //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //   maxZoom: 18,
    //   id: 'mapbox.streets',
    // }).addTo(this.map);

    // this.map.setZoom(zoom)

    // // ADD MARKER
    this.map.on('click', (e) => {
      this.state.latlng=e.latlng;
      if(!this.state.marker){this.marker(e.latlng)};
      this.setLatLng()
    })
  }

  flyto(){
    console.log();
    this.map.flyTo(this.props.location,13)
    this.map.once('moveend', function() {
    alert("Now Mark the Last Position of the Animal on the map")
});
  }

  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location){
      this.flyto();
    }
  }

  componentDidMount() {
      this.showmap(this.props.location,6)
      let myposition =[]
      if(navigator.geolocation){
        navigator.geolocation. getCurrentPosition((position)=>{
          myposition.push(position.coords.latitude)
          myposition.push(position.coords.longitude)
          this.setState({mapload:"Sploot is Working..."})
          this.map.flyTo(myposition,13)
          // this.map.setZoom(13);
        },(err)=>{

          this.setState({mapload:"Sploot is Working..."})
        })
      }
      else{
        

      }


  }
  //
  setLatLng=()=>{
    
    var latlng = this.state.latlng;
    var timestamp = this.state.timestamp; 
    if(!this.state.marker){
      
      this.props.addLocation({
        coordinates:[latlng.lat, latlng.lng],
        timestamp:timestamp
      });
      this.setState({marker:true});
      
    }
    else{
      console.log('Past Locations');
    }
  }


  // sets the date time into a single string and updates state 
  setDateTime = (e) => {
    e.preventDefault();
    let timestamp = [e.target[0].value, e.target[1].value]
    this.setState({
      timestamp: timestamp
    },
    function(){
      this.setLatLng()
    }
    );


  }

  // Generate Marker on Click event
  marker = (latlng) => {
    // change
    var myIcon = L.icon({
      iconUrl: '/images/markers/red1.png',
      iconSize: [42, 42],
      popupAnchor: [-10,8],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
      className:'marker1'
  });

    this.marker = L.marker(latlng, {
      icon: myIcon,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 100
    }).addTo(this.map);

    this.marker.on('click', function () {
      // marker event
    })
  }

  // OnClick for Marker
  markerClick() {
    this.marker.on('click', function (e) {
      alert('er');
    })
  }


  render() {
  return(
      <div class="col parent">

        
      
      
      <div id="map">
      <p>{this.state.mapload}</p>
      <div class="card-image lds-ring"><div></div><div></div></div>
      </div>
   
      </div>
  );
    
  }
}