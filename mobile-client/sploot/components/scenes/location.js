import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, PermissionsAndroid, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";


let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;


export default class CurrentLocation extends Component{
	constructor() {
        super()
        this.state = {
            locationError: true,
            Location: false,
            region: null,
            currentPlace: null,
            markers: [],
            latitude: null,
            longitude: null,
            latitudeDelta: 0.00922 * 1.5,
            longitudeDelta: 0.00421 * 1.5,
            selectedAnimal: "",
            uploading: false,
        }
        this.mapRef = null;
	}


	componentDidMount = async () => {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            this.setState({
                region: region,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
            if (this.state.longitude != null && this.state.latitude != null) {
                this.setState({
                    locationError: false
                })
            }
            // this.mapView.animateToRegion(region, 1000);

        }, (error) => console.log(error));
	}
	
	updateLocation = () => {
        // if (this.state.selectedAnimal == "") {
        //     this.dropdown.alertWithType("error", "Error", "Please Select An Animal");
        // } else if (this.state.description == "") {
        //     this.dropdown.alertWithType("error", "Error", "Please Add The Description");
        // } else {
        //     this.uploadImage();

        // }
    }

	render(){
		return(
			<View style={style.container}>


			<MapView
				style={style.mapContainer}
				provider={PROVIDER_GOOGLE}
				initialRegion={this.state.region}
				showsUserLocation={true}
				loadingEnabled={true}
				zoomControlEnabled={true}
				showsMyLocationButton={true}
				ref={ref => { this.mapView = ref }}
				onPress={(e) => this.setState({
					longitude: e.nativeEvent.coordinate.longitude,
					latitude: e.nativeEvent.coordinate.latitude,
					locationError: false
				})}
			>
				{this.state.latitude != null && this.state.latitude != null ? (
					<Marker draggable
						coordinate={{
							latitude: this.state.latitude,
							longitude: this.state.longitude
						}}
						title={"Here is the Animal"}

					/>
				) : (
						<View></View>
					)}
			</MapView>

			<TouchableOpacity style={style.buttonContainer} onPress={() => this.updateLocation()}>
                    <Text>Update</Text>
            </TouchableOpacity>
		
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
	
    mapContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "dashed",
		width: "100%",
		// marginBottom: 70,
		marginTop: 20,
        height: deviceHeight * 0.4,

	},
	
	buttonContainer: {
		borderRadius:2,
        backgroundColor:'rgba(256, 256, 256, 0.7)',
        // backgroundColor: '#03227f',
		opacity: 0.9,
		marginTop: 20,
		marginBottom:20,
		marginLeft:210,
        padding:5,
        height:50,
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#03227f'
    },

})