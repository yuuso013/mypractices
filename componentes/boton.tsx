import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  render() {
    return(
      <view>

        <Button 
          color="blue" size="medium" title="aceptar!">
        </Button><br/>

        <Button 
          color="blue" size="medium" title="rechazar!">
        </Button><br/>

        <Button 
          color="blue" size="medium" title="guardar!">
        </Button><br/>

      </view>
    )
  }
}
