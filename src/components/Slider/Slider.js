/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  Slideshow from 'react-native-slideshow'




export default class Slider extends Component {
  render() {
    return (
      <View>
        <Slideshow
          dataSource={[
            { url: 'http://placeimg.com/640/480/any' },
            { url: 'http://placeimg.com/640/480/any' },
            { url: 'http://placeimg.com/640/480/any' }
          ]} />
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
