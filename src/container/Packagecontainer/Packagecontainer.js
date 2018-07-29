import React, { Component } from 'react';
import { Header, Slider, CarList, ListDetailing } from '../../components'
import { ScrollView, View } from 'react-native';


export default class Packagecontainer extends Component {
    static navigationOptions = {
        header: null,

    }
    render() {
        const { navigate } = this.props.navigation
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header
                    title="Select Your Package"
                    iconName="chevron-left"
                    goBack={goBack}
                />
                <ScrollView >
                    <CarList
                        navigate={navigate}
                    />
                    <ListDetailing
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
        backgroundColor: '#fff',
    },
}





