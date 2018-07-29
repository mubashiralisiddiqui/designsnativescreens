import React, { Component } from 'react';
import { Header, Slider, Card } from '../../components'
import { View, ScrollView } from 'react-native';


export default class Slidercontainer extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Header
                    title="Car shop"
                    iconName="menu"
                />
                <ScrollView>
                    <Slider />
                    <Card
                        navigate={navigate}
                    />
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





