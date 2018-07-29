import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import { View } from 'react-native'


export default class AppHeader extends Component {
    render() {
        const {
            iconName,
            title,
            goBack
        } = this.props
        return (
            <View>
                <Header
                    leftComponent={<Icon
                        onPress={() => goBack && goBack(null)}
                        name={iconName}
                        type='entypo'
                        color='#fff'
                        size={28} />
                    }
                    centerComponent={{ text: title, style: { color: '#fff', fontSize: 18, marginBottom: 5 } }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        )
    }
}