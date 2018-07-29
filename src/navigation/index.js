import { StackNavigator } from 'react-navigation';
import { SliderContainer, Packagecontainer, Mapscreen } from '../container'




export const AppNav = StackNavigator({
    sliderScreen: { screen: SliderContainer },
    listScreen: { screen: Packagecontainer },
    Mapscreen: { screen: Mapscreen }
}, {
        headerMode: 'screen',
        initialRouteName: 'sliderScreen'
    }
)