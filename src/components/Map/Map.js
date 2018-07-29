import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Icon } from 'react-native-elements';



export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true',
            latitude: 24.871641,
            longitude: 67.059906,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    howsUserLocation={true}
                    followsUserLocation={true}
                    showsCompass
                    showsPointOfInternet={false}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    showsBuildings={true}
                    showsTraffic={true}
                    mapType="standard"
                    showsIndoors={true}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.longitudeDelta,
                    }}
                    onRegionChange={this.onRegionChange} >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude
                        }}
                        title="My Location"
                        description="nasir">
                    </MapView.Marker>
                </MapView>
                <View style={{ alignItems: 'flex-end', zIndex: 1, marginLeft: '85%', marginTop: '-3%', width: 30, height: 30, borderRadius: 100, backgroundColor: '#6495ed', padding: 5 }}>
                    <Icon name='share' type='font-awesome' size={18} color='#fff' />
                </View>
            </View>
        )
    }
}
const styles =
{

    container: {
        height: 200,
        zIndex: 2,
        // flex: 1,
        // ...StyleSheet.absoluteFillObject,
    },
    map: {
        // flex: 1,
        height: 200,
        // justifyContent: 'flex-end',
        // ...StyleSheet.absoluteFillObject,
        // alignItems: 'center',
    },
    // button: {
    //     flex: 1,
    //     marginLeft: 130,
    //     marginBottom: 20,
    //     marginTop: 450,
    //     height: 75,
    //     width: 100,
    // },
    // view1: {
    //     height: 200,
    //     flex: 1,
    //     ...StyleSheet.absoluteFillObject,

    // }
}

