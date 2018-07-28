import React, { Component } from 'react';
import { Header, Slider, CarList, ListDetailing } from '../../components'
import { ScrollView, Text } from 'react-native';


export default class Packagecontainer extends Component {
    // static navigationOptions = {
    //     // header: null,
    //     header: (props) => <Header {...props} title='Setect Your Package' iconNameLeft='home' iconNameRight='none' />,
    // }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header />
                <CarList />
                <ListDetailing />
            </ScrollView>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
}





