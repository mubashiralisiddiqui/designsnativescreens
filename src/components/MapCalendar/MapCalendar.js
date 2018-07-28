import React, { Component } from 'react';
import { Header, Button, Card, Icon } from 'react-native-elements';
import { View, ScrollView, Text } from 'react-native'

export default class mapCalendar extends Component {
    render() {
        return (
            <ScrollView style={{ display: 'flex' }}>
            <View style={{alignItems:'flex-start',flexDirection:'row',margin:10}}>
           <Icon name='home' type='font-awesome' size={36} color='#6495ed' />
           <Text style={{color:'#6495ed',marginLeft:10}}>Perso</Text>
            </View>
            </ScrollView>
        )
    }
}