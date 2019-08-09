import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';

// Scenes
import NewRequest from './components/scenes/newrequest';
import Emergency from './components/scenes/emergency';
import Home from './components/Home'
import Adoption from './components/scenes/adoption';
import Donate from './components/scenes/donate';



export default class App extends Component{
  render() {
    return (
         <Router hideNavBar="true">
          <Scene key="root">
            <Scene key="home" component = {Home} title="Sploot!" initial={true}/>
            <Scene key="newrequest" component = {NewRequest} title="New Request" />
            <Scene key="emergency" component = {Emergency} title="Emergency Request" />
            <Scene key="adoptions" component = {Adoption} title="Adoptions" />
            <Scene key="donation" component = {Donate} title="Donation" />
          </Scene>
         </Router>
    );
  }
}


