import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class Emergency extends Component{
	render(){
		return(
			<WebView
			source={{uri: 'http://192.168.8.103:3006'}}
			style={{marginTop: 10}}
		  />
		)
	}
}