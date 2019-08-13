import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, PermissionsAndroid, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";


let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;


export default class AboutUs extends Component{


	render(){
		return(
			<View style={style.container}>
				<Text>jsggfhsaghfbjsh</Text>
		</View>
		)
	}
}

const style = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#3b5998',
	},
	


})