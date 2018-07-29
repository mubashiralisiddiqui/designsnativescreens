import React, { Component } from 'react';
import { Header, Slider, Card, MapCalendar } from '../../components'
import { View, ScrollView } from 'react-native';


export default class Mapscreen extends Component {
    static navigationOptions = {
        header: null,

    }
    render() {
        const { navigate } = this.props.navigation
        const { goBack } = this.props.navigation;
        return (
            <View>
                <Header
                    title="Select Your Package"
                    iconName="chevron-left"
                    goBack={goBack}
                />
                <ScrollView>
                    <MapCalendar />
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