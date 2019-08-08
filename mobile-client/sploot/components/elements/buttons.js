import React, {Component} from 'react';
import {StyleSheet, View,TouchableOpacity,Text} from 'react-native'
import { Icon } from 'react-native-elements';



export const MMButton = (props) =>{
    return (
        <TouchableOpacity
        onPress={props.callback}
        style={style.mmButton}

        >

        <Icon
        name={props.icon}
        color={props.iconColor?props.iconColor:'#183366'} size={50} style={style.mmicon} type="foundation" />

        <Text style={style.mmTitle}>{props.title}</Text>

    </TouchableOpacity>
    )
}





const style = StyleSheet.create({
    mmButton: {
        borderRadius:2,
        backgroundColor:'rgba(256, 256, 256, 0.7)',
        margin:5,
        padding:5,
        height:120,
        width:100,
        alignItems: 'center',
        justifyContent: 'center'
       
    },

    mmTitle:{
        color:'black',
        textAlign:'center',
        marginTop:0,
        textAlignVertical:'bottom',
        fontWeight:'bold',
        fontSize:15
    },

    mmSubtitle:{
        textAlign:'center',
        fontSize:12
    },
    mmicon:{
        flex:1,
        flexDirection:'row',
       
    }
        
    

    
})