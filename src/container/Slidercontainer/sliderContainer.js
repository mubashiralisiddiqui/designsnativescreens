import React, { Component } from 'react';
import { Header,Slider,Card } from '../../components'
import { View, Text } from 'react-native';


export default class Slidercontainer extends Component {
    render() {
        return (
            <View>
                <Header />
                <Slider/>
                <Card/>

            </View>
        )
    }
}
const styles={
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
}





