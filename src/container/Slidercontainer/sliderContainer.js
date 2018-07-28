import React, { Component } from 'react';
import { Header, Slider, Card } from '../../components'
import { View, Text } from 'react-native';


export default class Packagecontainer extends Component {
    static navigationOptions = {
        // header: null,
        // header: (props) => <Header {...props} title='My Title' iconNameLeft='menu' iconNameRight='home' />,
    }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <Header />
                {/* <Slider/> */}
                <Card
                    // navigate={navigate}
                />

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





