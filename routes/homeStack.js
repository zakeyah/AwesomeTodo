import {createStackNavigator} from 'react-navigation-stack' 
import { createAppContainer } from 'react-navigation';
import Days from '../componants/days';
import PickerComponent from '../componants/todo';
import Home from '../componants/home';

const screens = {
    Home:{
        screen:Home
    },
    Days:{
        screen:Days
    },
    Notes:{
        screen:PickerComponent

    }
}

const homeStack= createStackNavigator(screens)
export default createAppContainer(homeStack);
