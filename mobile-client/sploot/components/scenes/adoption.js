import React, {Component} from 'react';
import {StyleSheet, Text, View, WebView ,FlatList} from 'react-native';



export default class Adoption extends Component{
	
	render(){
		return(
			<WebView
			source={{uri: 'http://192.168.8.103:3006/adoptions'}}
			style={{marginTop: 10}}
		  />
		)
	}
}