import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native'


export default class AppHeader extends Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'chevron-left', color: '#fff', size:32 }}
                    centerComponent={{ text: 'Select Your Package',  style: { color: '#fff',fontSize:18,marginBottom:5 } }}
                    // rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        )
    }
}