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
import ArrowLeft from 'react-native-vector-icons/Ionicons'
// import arrowRight from 'react-native-vector-icons/Ionicons'



export default class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUY_g1A8AnQ_BFByMsQEIHA9pQMPX6i4wshQ11ZMdq3i3K5jTf'
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'http://placeimg.com/640/480/any',
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'http://kb4images.com/images/image-of-car/37686835-image-of-car.jpg',
                },
            ],
        };
    }
    render() {
        return (
            <View>
                <Slideshow
                    arrowLeft={<Icon />}
                    height={165}
                    dataSource={this.state.dataSource}
                    // position={2}
                    arrowSize={30}
                    arrowLeft={
                        <ArrowLeft name="ios-arrow-back"
                            size={30}
                            color="white"
                        />
                    }
                    arrowRight={<ArrowLeft
                        name="ios-arrow-forward"
                        size={30}
                        color="white"
                    />}
                />
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
