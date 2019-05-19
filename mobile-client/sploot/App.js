import React, {Component} from 'react';
import { StyleSheet, ImageBackground, View} from 'react-native';
import Home from './components/Home'
import { Header} from 'react-native-elements';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={{uri:'https://placedog.net/1000'}} style={{height:'100%',width:'100%'}}>
       <Home/>
      </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e3e69',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
