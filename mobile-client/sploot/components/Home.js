import React,{Component} from 'react';
import { StyleSheet, View,Text, Image,  Dimensions} from 'react-native';
import LiveAlerts from './LiveAlerts/liveAlerts';
import {MMButton} from './elements/buttons';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import { colors } from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
        this.Cameratest = this.Cameratest.bind(this)
        // this.test = this.test.bind(this)
    }

// TEST METHODS ================================================
    Cameratest(){
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

    MainMenuRoute(scene){
        switch(scene){
            case 'request':
                Actions.newrequest();
                break;

            case 'emergency':
                Actions.emergency();
                break;
            case 'lost':
                Actions.newrequest({lost:true})    
                break;
            case 'nearby':
                Actions.requests({nearby:true})
                break;
            case 'adopt':
                Actions.adoptions()
                break;
            case 'donate':
                Actions.donation()
            }
        
        
    }
// TEST METHODS END HERE =======================================


    render(){
        return(
            <View style={style.cover}>
                <View  style={style.imagecover}>
                {/* <Text style={style.topic}>Sploot !</Text> */}
                <Image 
                  style={style.image1}
                source={require('./images/sploot.png')} />
                <Image 
                  style={style.image2}
                source={require('./images/home-image.png')} />
                </View>

            
                <View style={style.mainmenu}> 
                        <MMButton 
                            title = "Request Help"
                            icon="guide-dog"
                            callback ={this.Cameratest}
                            callback={()=>this.MainMenuRoute('request')}
                        />

                        <MMButton 
                            title = "Emergency"
                            icon="first-aid"
                            iconColor="#8B0000"
                            callback ={this.Cameratest}
                            callback={()=>this.MainMenuRoute('emergency')}
                        />
                        <MMButton 
                            title = "Lost Animal"
                            icon="paw"
                            callback ={this.Cameratest}
                            callback={()=>this.MainMenuRoute('lost')}
                        />
         
                        <MMButton 
                            title = "Nearby Animals"
                            icon="marker"
                            callback={()=>this.MainMenuRoute('nearby')}
                        />
                        <MMButton 
                            title = "Adopt"
                            icon="heart"
                            iconColor="#8B0000"
                            callback={()=>this.MainMenuRoute('adopt')}
                        />
                        <MMButton 
                            title = "Donate"
                            icon="dollar"
                            callback={()=>this.MainMenuRoute('donate')}
                            // callback={this.test}
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
        justifyContent: 'center',
        // height: deviceHeight*0.9,
        
    },
    cover:{
        flex: 1, 
        // flexDirection: 'row', 
        // flexWrap: 'wrap',
        // alignItems: 'center',
        backgroundColor: '#3b5998',
        // justifyContent: 'center'

        
    },

    imagecover:{
        
        marginBottom: 10,
        
    },
    image1:{
        alignSelf: 'flex-start',
        height: 70,
        width: 190,
        
    },

    image2:{
        alignSelf: 'flex-end',
        height: 200,
        width: 320,
        
    },

    topic:{
        alignSelf: 'flex-start',
        color: '#FFFF00',
        fontWeight: 'bold',
        fontSize: 50,
        marginLeft: 10,
        
    },


})