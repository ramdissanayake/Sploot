import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';

// Scenes
import NewRequest from './components/scenes/newrequest';
import Emergency from './components/scenes/emergency';
import Home from './components/Home'


type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
         <Router hideNavBar="true">
          <Scene key="root">
            <Scene key="home" component = {Home} title="Sploot!" initial={true}/>
            <Scene key="newrequest" component = {NewRequest} title="New Request" />
            <Scene key="emergency" component = {Emergency} title="Emergency Request" />
          </Scene>
         </Router>
    );
  }
}


