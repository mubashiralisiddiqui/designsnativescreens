import React, { Component } from 'react';
import { Header,Button,Card,Icon } from 'react-native-elements';
import { View,Text } from 'react-native'


export default class AppHeader extends Component {
    render() {
        return (
            <View>
                <Card
                    title='HELLO WORLD'
                    // image={require('../images/pic2.jpg')}
                    >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
  </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        fontFamily='Lato'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
            </View>
        )
    }
}