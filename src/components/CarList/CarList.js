import React, { Component } from 'react';
import { Header, Icon, ListItem, List } from 'react-native-elements';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'


export default class CarList extends Component {
    render() {
        const {
            navigate
        } = this.props
        const list = [
            {
                name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Read More',
                // icon: 'flight-takeoff'
            },
            {
                name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Read More',
                // icon: 'flight-takeoff'
            },
            {
                name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Read More',
                // icon: 'flight-takeoff'
            },

        ]
        return (
            <View>
                <View style={styles.iconText}>
                    <Icon name='car-wash' type='material-community' color='#6495ed' />
                    <Text style={styles.Text}>Car Wash</Text>
                </View>
                <ScrollView>

                    <List containerStyle={{ marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0, borderBottomColor: 'transparent' }}>
                        {
                            list.map((l, i) => (
                                < TouchableOpacity onPress={() => navigate('sliderScreen')}>
                                    <ListItem
                                        roundAvatar
                                        avatar={require('./2.png')}
                                        // rightIcon={{name:'clock',type:'feather'}}
                                        rightTitle='84 min-80 min'
                                        rightTitleContainerStyle={{ width: 10, height: 10, justifyContent: 'flex-start', marginTop: -90 }}
                                        // rightIconContainerStyle={{width:10,height:10,justifyContent: 'flex-start',marginTop:-90}}
                                        rightTitleStyle={{ color: '#6495ed', fontSize: 8, marginLeft: 20 }}
                                        // chevronColor='#6495ed'
                                        avatarContainerStyle={{ width: 60, height: 60, backgroundColor: 'white' }}
                                        avatarStyle={{ width: 60, height: 60, backgroundColor: 'white' }}
                                        key={i}
                                        title={l.name}
                                        containerStyle={{ borderBottomWidth: 0 }}
                                        titleStyle={{
                                            fontSize: 12,
                                            color: '#C5C5C5',
                                            width: 270,
                                            fontWeight: 'normal',
                                            textAlign: 'justify',
                                            textJustify: 'inter-word'
                                        }}
                                        titleNumberOfLines={4}
                                        hideChevron
                                        subtitle={l.subtitle}
                                        subtitleStyle={{ color: '#6495ed', }}
                                    />
                                </ TouchableOpacity>
                            ))
                        }
                    </List>
                </ScrollView>

            </View>
        )
    }
}
const styles = new StyleSheet.create({
    iconText: {
        flexDirection: 'row',
        margin: 10
    },
    Text: {
        margin: 10,
        color: '#c5c5c5'
    }
})