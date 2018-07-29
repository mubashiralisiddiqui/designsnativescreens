import React, { Component } from 'react';
import { Header, Button, Card, Icon } from 'react-native-elements';
import { View, ScrollView, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class mapCalendar extends Component {
    render() {
        return (
         <ScrollView>
            <Card containerStyle={{padding:0,margin:0}}>
                <View style={{alignItems:'flex-start',flexDirection:'row',margin:10}}>
                  <Icon name='home' type='font-awesome' size={36} color='#6495ed' />
                  
                  <View style={{flexDirection:'column'}}>
                      <Text style={{color:'#6495ed',marginLeft:10}}>Perso</Text>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12}}>4989 Olive Street, Defence</Text>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12,marginTop:20}}>Car Type:<Text style={{color:'#6495ed',fontSize:12}}>            Sedan</Text></Text>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12}}>Package Type:<Text style={{color:'#6495ed',fontSize:12}}>   Lavish</Text></Text>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12}}>Option:<Text style={{color:'#6495ed',fontSize:12}}>                Eco Friendly</Text></Text>
                 </View>
                 <View style={{marginLeft:'15%'}}>
                    <View style={{alignItems:'flex-end',marginLeft:'35%',marginTop:'-18%',width:30,height:30,borderRadius:100,backgroundColor:'#6495ed',padding:5}}>
                            <Icon name='share' type='font-awesome' size={18} color='#fff' />
                    </View>
                  
                    <View style={{flexDirection:'row',marginTop:'10%'}}>
                         <Icon name='clock' type='evilicon' color='#c5c5c5' size={14}/>
                         <Text style={{fontSize:10, color:'#6495ed',marginLeft:2}}>45 min - 80 min</Text>
                    </View>
                        <Text style={{color:'#6495ed',fontSize:18,marginLeft:'30%',marginTop:'10%'}}>$45</Text>
                 </View>
                </View>
            </Card>
                <View style={{margin:10}}>
                    <Text style={{color:'#c5c5c5',fontSize:16}}>Select a Date</Text>
                </View>
            <View style={{alignItems:'center',marginBottom:10,}}>
                <Calendar
                markedDates={{
                    '2018-07-29': {selected: true,  selectedColor: '#6495ed'},
                    
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: '#eee',
                    height: 350,
                    width:'95%',
                    borderRadius:10,
                    
                    
                  }}
                  theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: '#6495ed',
                    monthTextColor: '#6495ed',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'arial',
                    textDayHeaderFontFamily: 'monospace',
                    textMonthFontWeight: 'bold',
                    textDayFontSize: 12,
                    textMonthFontSize: 12,
                    textDayHeaderFontSize: 12
                  }}
                    // Initially visible month. Default = Date()
                         current={'2018-07-29'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                         minDate={'2000-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                         maxDate={'2050-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                         onDayPress={(day) => {console.log('selected day', day)}}
                    // Handler which gets executed on day long press. Default = undefined
                         onDayLongPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                         monthFormat={'MMMM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                         onMonthChange={(month) => {console.log('month changed', month)}}
                         onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                />
            </View>
                {/* <View style={{margin:10,marginBottom:20}}>
                    <Text style={{color:'#c5c5c5',fontSize:16}}>Select a Date</Text>
                </View> */}
                <View style={{margin:10,marginBottom:5,marginTop:0}}>
                    <Text style={{color:'#c5c5c5',fontSize:16}}>Select a Date</Text>
                </View>
                <Card containerStyle={{padding:0,marginBottom:50,borderRadius:10}}>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#eee'}}>
                    <View style={{flexDirection:'row',margin:20}}>
                        <Icon name='credit-card'  color='#c5c5c5'/>
                        <Text style={{color:'#6495ed',fontSize:18,marginLeft:'5%'}}>Add A Card</Text>
                    </View>
                    <View style={{ backgroundColor: '#eee', height: '100%', width: 1, alignItems: 'center', justifyContent: 'center' }} />
                    <View style={{flexDirection:'row',margin:20}}>
                        <Text style={{color:'green',fontSize:18,marginRight:'5%'}}>Credit $45</Text>
                        <Icon name='check' color='green'/>
                    </View>
                </View>
                <View style={{alignItems:'flex-start',flexDirection:'row',margin:10}}>
                  {/* <Icon name='home' type='font-awesome' size={36} color='#6495ed' /> */}
                  
                  <View style={{flexDirection:'column'}}>
                      <Text style={{color:'#6495ed',marginLeft:10}}>Perso</Text>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12}}>4989 Olive Street, Defence</Text>
                      <View style={{flexDirection:'row',marginTop:'10%',marginLeft:'5%'}}>
                      <Icon name='clock' type='evilicon' color='#c5c5c5' size={16}/>
                  <Text style={{fontSize:10, color:'#6495ed',marginLeft:5,marginTop:2}}>45 min - 80 min</Text>
                  </View>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12,marginTop:5}}>Car Type:<Text style={{color:'#6495ed',fontSize:12}}>            Sedan</Text></Text>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12}}>Package Type:<Text style={{color:'#6495ed',fontSize:12}}>   Lavish</Text></Text>
                      <Text style={{color:'#c5c5c5',marginLeft:10,fontSize:12}}>Option:<Text style={{color:'#6495ed',fontSize:12}}>                Eco Friendly</Text></Text>
                 </View>
                 <View style={{marginLeft:'12%'}}>
                
                  
                  <Text style={{color:'#c5c5c5',fontSize:18,marginLeft:'30%',marginTop:'10%'}}>Total</Text>
                  <Text style={{color:'#6495ed',fontSize:18,marginLeft:'30%',marginTop:'5%'}}> $45</Text>
                     <Button
                        title='Book Now'
                        backgroundColor='#6495ed'
                        borderRadius={2} 
                        buttonStyle={{width:90,height:30,marginTop:10,marginRight:10}}/>
                  </View>
                </View>
                </Card>
                <View style={{margin:10,marginBottom:20}}>
                    <Text style={{color:'#c5c5c5',fontSize:16}}>Select a Date</Text>
                </View>
                
        </ScrollView>
        )
    }
}