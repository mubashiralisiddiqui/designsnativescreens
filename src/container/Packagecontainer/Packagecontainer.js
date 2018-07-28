import React, { Component } from 'react';
import { Header, Slider, CarList, ListDetailing } from '../../components'
import { ScrollView, View } from 'react-native';


export default class Packagecontainer extends Component {
    // static navigationOptions = {
    //     // header: null,
    //     header: (props) => <Header {...props} title='Setect Your Package' iconNameLeft='home' iconNameRight='none' />,
    // }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView >
                    <CarList />
                    <ListDetailing />
                </ScrollView>
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
}





