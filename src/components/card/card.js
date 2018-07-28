import React, { Component } from 'react';
import { Header, Button, Card, Icon } from 'react-native-elements';
import { View, ScrollView, Text } from 'react-native'
import CardHeader from './cardHeader';
import Thermometor from 'react-native-vector-icons/SimpleLineIcons'
import Wheel from 'react-native-vector-icons/MaterialCommunityIcons'

export default class AppHeader extends Component {
    render() {
        return (
            <ScrollView style={{ display: 'flex' }}>
                <Card
                    containerStyle={{
                        padding: 0,
                        borderRadius: 20,
                        borderColor: '#0000',
                        shadowOpacity: 0.7,
                        shadowRadius: 5,
                        shadowColor: '#000',
                        shadowOffset: { height: 0, width: 0 },
                        elevation: 2
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <CardHeader />
                        <View style={{ marginTop: -70 }}>
                            <View
                                style={{
                                    width: 200,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    marginVertical: 1
                                }}
                            >
                                <Wheel
                                   size={20}
                                    name="ship-wheel"
                                />
                                <Text style={{ color: '#C9C9C9' }}>Full exteriror hand wash</Text>
                            </View>
                            <View
                                style={{
                                    width: 200,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    marginVertical: 1
                                }}
                            >
                                <Thermometor
                                    name='speedometer'
                                    size={20}
                                />
                                <Text style={{ color: '#C9C9C9' }}>Full exteriror hand wash</Text>
                            </View>
                            <View
                                style={{
                                    width: 200,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    marginVertical:1
                                }}
                            >
                                <Icon name="menu" />
                                <Text style={{ color: '#C9C9C9' }}>Full exteriror hand wash</Text>
                            </View>
                            <View
                                style={{
                                    width: 200,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }}
                            >
                                <Thermometor
                                    name='speedometer'
                                    size={20}
                                />
                                <Text style={{ color: '#C9C9C9' }}>Full exteriror hand wash</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#4F6B9F', left: 10, fontSize: 20 }}>
                                Description
                        </Text>
                            <Text style={{
                                left: 10, width: 400,
                                flexDirection: 'row', flexWrap: 'wrap',
                                color: '#C9C9C9',
                                marginBottom: 10
                            }}>
                                Lorem  standard dummy text ever since the 1500s,
                                Lorem  standard dummy text ever since the 1500s,
                                Lorem  standard dummy text ever since the 1500s,
                                Lorem  standard dummy text ever since the 1500s,
                                Lorem  standard dummy text ever since the 1500s,

                         </Text>
                        </View>

                    </View>
                </Card>
                <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{
                        marginLeft: 'auto',
                        marginTop: 15,
                        borderRadius: 100,
                        marginRight: 'auto',
                        marginBottom: 90,
                        backgroundColor: '#4F6B9F',
                        width: '50%',
                        height: 50
                    }}
                    title='VIEW MORE' />
            </ScrollView>
        )
    }
}