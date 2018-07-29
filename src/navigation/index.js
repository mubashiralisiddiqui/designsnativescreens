import { StackNavigator } from 'react-navigation';
import { SliderContainer, Packagecontainer } from '../container'




export const AppNav = StackNavigator({
    sliderScreen: { screen: SliderContainer },
    listScreen: { screen: Packagecontainer }
}, {
        headerMode: 'screen',
        initialRouteName: 'sliderScreen'
    }
)