import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { View, ImageBackground, Text } from 'react-native'


export default class CardHeader extends Component {
    render() {
        return (
            <View style={{ height: 200, width: '100%', borderRadius: 20,borderColor:'red' }}>
                <ImageBackground
                    source={require("../../assets/images/download.jpg")}
                    imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                    style={{ width: '100%', height: '80%', borderRadius: 20 }}
                >
                </ImageBackground>
            </View>
        )
    }
}