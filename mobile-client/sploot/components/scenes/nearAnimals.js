import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class NearByAnimal extends Component{
	render(){
		return(
			<WebView
			// source={{uri: 'http://192.168.8.103:3006/requests'}}
			source={{uri: 'https://www.youtube.com/watch?v=D_becJZpEO8'}}
			style={{marginTop: 10}}
		  />
		)
	}
}