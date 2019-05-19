import React,{Component} from 'react';
import { StyleSheet, View,Text} from 'react-native';
import LiveAlerts from './LiveAlerts/liveAlerts';
import {MMButton} from './elements/buttons';
import ImagePicker from 'react-native-image-picker';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
        this.test = this.test.bind(this)
    }
    test(){
        const options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };

        ImagePicker.launchCamera(options, (response) => {
            console.log(response)
          });
    }

    render(){
        return(
            <View >

                <LiveAlerts style={{flex:3,flexDirection:'row'}}/>
                <View style={style.mainmenu}> 
                        <MMButton 
                            title = "Request Help"
                            icon="guide-dog"
                            
                            callback={this.test}
                        />

                        <MMButton 
                            title = "Emergency"
                            icon="first-aid"
                            iconColor="#8B0000"
                            callback={this.test}
                        />
                        <MMButton 
                            title = "Lost Animal"
                            icon="paw"
                            callback={this.test}
                        />
         
                        <MMButton 
                            title = "Nearby Animals"
                            icon="marker"
                            callback={this.test}
                        />
                        <MMButton 
                            title = "Adopt"
                            icon="heart"
                            iconColor="#8B0000"
                            callback={this.test}
                        />
                        <MMButton 
                            title = "Donate"
                            icon="dollar"
                            callback={this.test}
                        /> 
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainmenu:{
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})