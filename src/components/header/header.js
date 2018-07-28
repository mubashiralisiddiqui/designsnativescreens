import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native'


export default class AppHeader extends Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        )
    }
}