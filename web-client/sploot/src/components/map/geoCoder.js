import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

var accesstoken = 'bfab21a963bcf0';

export const reverseGC = (latlng) =>{
    return fetch('https://eu1.locationiq.com/v1/reverse.php?key='+accesstoken+'&lat='+latlng[0]+'&lon='+latlng[1]+'&format=json')
    .then(response=>(response.json()))
    .then(response=>{
       return response ;
    })
}

export const forwardGC = (latlng)=>{

}