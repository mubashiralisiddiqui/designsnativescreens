/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Slideshow from 'react-native-slideshow'
import { Icon } from 'react-native-elements';




export default class Slider extends Component {
    render() {
        return (
            <View>
                <Slideshow
                    arrowLeft={<Icon />}
                    height={165}
                    dataSource={[
                        { url: 'http://placeimg.com/640/480/any' },
                        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUY_g1A8AnQ_BFByMsQEIHA9pQMPX6i4wshQ11ZMdq3i3K5jTf' },
                        { url: 'http://kb4images.com/images/image-of-car/37686835-image-of-car.jpg' }
                    ]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
