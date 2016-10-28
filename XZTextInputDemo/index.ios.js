/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class XZTextInputDemo extends Component {
  render() {
    return (
      <View>
        <TextInput 
        style={{borderWidth:1,borderColor:'red',width:100,height:50}}
        onSubmitEditing = {()=>{
          console.log('submit')
          this.refs.input2.focus()
        }}
        />
        <TextInput 
        style={{borderWidth:1,borderColor:'red',width:100,height:50,marginTop:30}}
        ref='input2'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('XZTextInputDemo', () => XZTextInputDemo);
