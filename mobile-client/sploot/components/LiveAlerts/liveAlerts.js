import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';


export default class LiveAlerts extends Component{
    render(){
        return(
            <View style={{width:'100%'}}>
            <Image source={require('./sploot.png')} resizeMode="contain"  ></Image>
            <Text>Live Alerts</Text>
            </View>
        )
    }
}