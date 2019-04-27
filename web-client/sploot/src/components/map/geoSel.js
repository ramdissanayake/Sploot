import React, { Component } from 'react'
// import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import $ from 'jquery';




export default class MapSel extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      marker:false,
      dt_prompt:false
    }
  }

  componentDidMount() {
    this.map = L.map('map', {
      // Set Center to nearest location
      center: [6.8988, 79.8608],
      zoom: 15,
    })

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hlaGFua3VsZSIsImEiOiJjanVsbXljYmIwbnl5NDVsOG93ZjN6a3MxIn0.M0lV10tb2YDwe5a6UK4pXA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      // accessToken: 'your.mapbox.access.token'
    }).addTo(this.map);

    this.map.on('click', (e) => {
      // alert(e.latlng);
      var timestamp= this.promptDateTime()
      if(!this.state.marker){
        this.marker(e.latlng);
        this.props.addLocation({
          coordinates:[e.latlng.lat, e.latlng.lng],
          timestamp:timestamp
        });
        this.setState({marker:true});
      }
      else{
        console.log('Past Locations');
      }
      // this.map.off('click');
    })
  }

  // Shows the date time prompt 
  promptDateTime(){
    this.setState((state)=>({
      dt_prompt:!state.dt_prompt
    }))
    window.$('#dtpicker').modal('show');
  }

  // Generate Marker on Click event
  marker = (latlng) => {
    // change
    var myIcon = L.icon({
      iconUrl: '/images/markers/marker1.png',
      iconSize: [38, 38],
      popupAnchor: [-10,5],
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
      {(this.state.dt_prompt?
      <div id="dtpicker" className=" modal fade ">
                
      <div class="modal-dialog center" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">When did you see the Animal at this location?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>When did you see the Animal at this location?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>




      </div>
      :<div></div>)}
      
      
      <div id="map">
      </div>
   
      </div>
  );
    
  }
}