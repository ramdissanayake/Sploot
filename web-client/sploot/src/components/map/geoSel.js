import React, { Component } from 'react'
// import 'leaflet/dist/leaflet.css';
import L from 'leaflet';





export default class MapSel extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      marker:false,
      dt_prompt:false,
      timeset:false,
      timestamp:"[]"
      
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
      this.state.latlng=e.latlng;
      if(!this.state.marker){this.marker(e.latlng)};
      window.$('#dtpicker').modal('show');
      // this.map.off('click');
    })
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

    window.$('#dtpicker').modal('hide');
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
      {(true?
      <div id="dtpicker" className=" modal fade ">
                
      <div class="modal-dialog center" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">When did you see the Animal at this location?</h5>
        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
                        <form onSubmit={this.setDateTime}>
      <div class="modal-body ">
                         <div class='input-group date half' id='datetimepicker1'>
                        <span class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </span>
                        {/* Change Date time picker and Styles */}
                        <input type='date' class=" form-control" placeholder="Date and Time DD-MM-YY hh:mm"/>
                        </div>

                        <div class='input-group date half' id='datetimepicker1'>
                        <span class="input-group-addon">
                            <i class="fa fa-clock-o"></i>
                        </span>
                        {/* Change Date time picker and Styles */}
                        <input type='time' class=" form-control" placeholder="Date and Time DD-MM-YY hh:mm"/>
                        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Save Details</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
                        </form>
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