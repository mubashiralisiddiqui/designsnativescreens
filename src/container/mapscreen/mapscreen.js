import React, { Component } from 'react';
import { Header, Slider, Card,MapCalendar } from '../../components'
import { View, ScrollView } from 'react-native';


export default class Mapscreen extends Component {
    render() {
        return (
            <View>
                <Header />
                <ScrollView>
                 <MapCalendar/>
                </ScrollView>
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
}