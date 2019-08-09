import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';


export class HamburgerIcon extends Component {

    toggleDrawer = () => {
        console.log(this.props.navigationProps);
        this.props.navigationProps.toggleDrawer();
      }
  
    render() {
        return (
  
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
            <Image
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
              style={{ width: 25, height: 25, marginLeft: 5 }}
           />
          </TouchableOpacity>
        </View>
  
      );
   
    }
  }


  export class CustomSideMenu extends Component {

    render() {
  
      return (
  
        <View style={styles.sideMenuContainer}>
  
          <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
            style={styles.sideMenuProfileIcon} />
  
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
  
          <View style={{width: '100%'}}>
  
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
  
               <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('AboutUS') }} > First Activity </Text>
  
              </View>
  
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
  
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('ContactUs') }} > Second Activity </Text>
  
              </View>
  
  
         </View>
  
         <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
  
  
        </View>
      );
    }
  }
  
  




const styles = StyleSheet.create({

        MainContainer: {
      
          flex: 1,
          paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
          alignItems: 'center',
          justifyContent: 'center',
      
        },
      
        sideMenuContainer: {
      
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingTop: 20
        },
      
        sideMenuProfileIcon:
        {
          resizeMode: 'center',
          width: 150, 
          height: 150, 
          borderRadius: 150/2
        },
      
        sideMenuIcon:
        {
          resizeMode: 'center',
          width: 28, 
          height: 28, 
          marginRight: 10,
          marginLeft: 20
          
        },
      
        menuText:{
      
          fontSize: 15,
          color: '#222222',
          
        }
      
      });


