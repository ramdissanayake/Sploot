import React, {Component} from 'react';
// import MapboxGL from '@mapbox/react-native-mapbox-gl'
import ImagePicker from 'react-native-image-picker';
import {
	AppRegistry,
	Image,
	PixelRatio,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
	View,
	Dimensions,
	TextInput,
  } from 'react-native';
  import { Icon } from 'react-native-elements';
  import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;


export default class NewRequest extends Component{
	state = {
		avatarSource: null,
	  };
	
	  constructor(props) {
		super(props);
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
			title: "", //send
            track: true, //send
            contact: "", //send
            medical: false, //send
            lost: false, //send
            tresspassable: false, //send
            aggression: false, //send
            additional: "", //send
            step: 0,
            tracker: [], //send
            location: "",
            loading: false,
            pictures: [], //send
            timestamp: "", //ok
            picurl:[],
			mapLocation: [7.8731, 80.7718],
			milestones:{id:"0000"}
        }
		this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
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


	selectPhotoTapped() {
		const options = {
		  quality: 1.0,
		  maxWidth: 500,
		  maxHeight: 500,
		  storageOptions: {
			skipBackup: true,
		  },
		};
	
		ImagePicker.showImagePicker(options, (response) => {
		  console.log('Response = ', response);
	
		  if (response.didCancel) {
			console.log('User cancelled photo picker');
		  } else if (response.error) {
			console.log('ImagePicker Error: ', response.error);
		  } else if (response.customButton) {
			console.log('User tapped custom button: ', response.customButton);
		  } else {
			let source = { uri: response.uri };
	
			// You can also display the image using data:
			// let source = { uri: 'data:image/jpeg;base64,' + response.data };
	
			this.setState({
			  avatarSource: source,
			});
		  }
		});
	}

	submit = () => {
	  console.log(this.state)
	  let payload = new FormData();
	  payload.append('title',this.state.title);
	  payload.append('description',this.state.description);
	  payload.append('tracker',this.state.track);
	  payload.append('milestones',this.state.milestones);

	  fetch('http://192.168.8.103:3000/api/requests/new',{
		  method:"POST",
		  body:payload
	  })
	  .then(
		  res=>console.log(res)
	  )
    }

	handleChange(e) {
		console.log(this.state)
		var key = e.target.name;
		var value = e.target.value;
        this.setState({
            [key]: value,

        })
    }

	render(){
		return(
			<ScrollView>
			
			<View style={styles.container}>
<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
			  <View
				style={[
				   styles.avatarContainer,
				  { marginBottom: 20 },
				]}
			  >
				{this.state.avatarSource === null ? (
			
				<Image
				style={styles.avatar}
				source={require('../images/sploot.png')}/> 
				// <Text>"sgdfhgdhs"</Text>
				
				) : (
				  <Image style={styles.avatar} source={this.state.avatarSource} />
				)}
			  </View>
			  </TouchableOpacity>	

			<TextInput
			style={[styles.textInputStyle]}
			placeholder={"Title"}
			value={this.state.title}
			onChangeText={(title) => {
				this.setState({title},()=>(console.log(this.state)))}}
			/>

			<TextInput
			style={[styles.textInputStyle, {height: deviceHeight * 0.15,}  ]}
			placeholder={"Enter Description Here"}
			multiline = {true}
			numberOfLines = {4}
			value = {this.state.additional}
			onChangeText={(additional) => {
				this.setState({additional},()=>(console.log(this.state)))}}
			/>
			 
			 <MapView
				style={styles.mapContainer}
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

			<TouchableOpacity style={styles.buttonContainer} onPress={() => this.submit()}>
                    <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

			
	</View>
	</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#3b5998',
	},
	avatarContainer: {
	  borderColor: '#9B9B9B',
	  borderWidth: 1 / PixelRatio.get(),
	  justifyContent: 'flex-start',
	  alignItems: 'center',
	  backgroundColor: '#6997e0',
	  borderRadius: 100,
	  marginTop: 15,
	},

	buttonContainer: {
		borderRadius:2,
        backgroundColor:'rgba(256, 256, 256, 0.7)',
		opacity: 0.9,
		marginTop: 10,
		marginBottom:20,
		marginLeft:210,
        padding:5,
        height:50,
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
		borderRadius: 20,
		borderColor: '#03227f',
		
	},
	
	buttonText: {
		color: '#03227f',
		fontSize: 18,
	},
	
	mapContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "dashed",
		width: "100%",
		marginBottom: 10,
		// marginTop: 10,
		height: deviceHeight * 0.47,
		width: deviceWidth*0.91,

	},

	// image1:{
    //     alignSelf: 'center',
    //     height: 70,
    //     width: 190,
        
	// },
	
	avatar: {

	  borderRadius: 100,
	  width: 200,
	  height: 200,
	},

	button1:{
		borderRadius: 10,
		width: 75,
		height: 55,
		backgroundColor: '#3b5998',
	},

	uploadimage:{
        alignSelf: 'center',
        height: 200,
        width: 320,
        
	},
	
	textInputStyle: {
        alignSelf: "center",
        flexWrap: "wrap",
        textAlignVertical: "top",
        textAlign: "left",
        fontSize: 14,
        // marginHorizontal: 12,
        marginBottom: 10,
        // padding:2,
		height: deviceHeight * 0.06,
		width: deviceWidth*0.91,
		backgroundColor: '#ffffff',
	},
	

  });