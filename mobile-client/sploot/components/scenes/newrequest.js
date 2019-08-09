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
	View,
  } from 'react-native';
  import { Icon } from 'react-native-elements';

export default class NewRequest extends Component{
	state = {
		avatarSource: null,
	  };
	
	  constructor(props) {
		super(props);
		this.selectPhotoTapped = this.selectPhotoTapped.bind(this);

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


	render(){
		return(
			
			<View style={styles.container}>
			<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
			  <View
				style={[
				  styles.avatar,
				  styles.avatarContainer,
				  { marginBottom: 20 },
				]}
			  >
				{this.state.avatarSource === null ? (
				<Text >Upload a Photo</Text>
				) : (
				  <Image style={styles.avatar} source={this.state.avatarSource} />
				)}
			  </View>
			 
			</TouchableOpacity>

	</View>
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
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#6997e0',
	},
	avatar: {
	  borderRadius: 10,
	  width: 300,
	  height: 400,
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
  });