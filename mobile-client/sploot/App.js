import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createDrawerNavigator, createStackNavigator, createAppContainer, StackNavigator, DrawerItem } from 'react-navigation';
import { StyleSheet, SafeAreaView, View, Container, ScrollView } from 'react-native';
// Scenes
import NewRequest from './components/scenes/newrequest';
import Emergency from './components/scenes/emergency';
import Home from './components/Home';
import Adoption from './components/scenes/adoption';
import Donate from './components/scenes/donate';
import AboutUs from './components/scenes/about';
import ContactUs from './components/scenes/contact';
import SideMenuPanel from './components/SideMenu/sidemenu';
import CurrentLocation from './components/scenes/location';
import LostAnimal from './components/scenes/lostAnimals';
console.disableYellowBox = true;

export default class App extends Component{
  render() {

  //   const AppStack = createStackNavigator(
  //     {
  //         AboutUs: { screen: AboutUs },
  //         ContactUs: { screen: ContactUs },
  //         // Profile: { screen: Profile },
  //         // Notification: {
  //         //     screen: Notification,
  //         //     navigationOptions: {
  //         //         tabBarLabel: "Notifications",
  //         //         tabBarIcon: ({ tintColor,focused  }) => (
  //         //             <Noti color={tintColor} />

  //         //         )
  //         //     },
  //         // }
  //     })

  //   const CustumDrawerComponent = (props) => (
  //     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
  //         <SideMenuPanel />
  //     </SafeAreaView>
  // )
    //  const AppDrawerNavigator = createDrawerNavigator({
  //     Dashboard: AppStack
  //     }, {
  //         contentComponent: CustumDrawerComponent
  //     }
  // );

    return (

         <Router hideNavBar="true">
          <Scene key="root">
            <Scene key="home" component = {Home} title="Sploot!" initial={true}/>
            <Scene key="newrequest" component = {NewRequest} title="New Request" />
            <Scene key="emergency" component = {Emergency} title="Emergency Request" />
            <Scene key="adoptions" component = {Adoption} title="Adoptions" />
            <Scene key="donation" component = {Donate} title="Donation" />
            <Scene key="about" component = {AboutUs} title="About Us" />
            <Scene key="location" component = {CurrentLocation} title="Current Location" />
            <Scene key="contactus" component = {ContactUs} title="Contact Us" />
            <Scene key="lostrequest" component = {LostAnimal} title="Lost Animals" />
                        {/* <AppDrawerNavigator /> */}
          </Scene>

            

         </Router>


          
    );
  }
}



