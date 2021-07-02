import {createStackNavigator} from 'react-navigation-stack' 
import { createAppContainer } from 'react-navigation';
import Days from '../componants/days';
import Todo from '../componants/todo';
import Home from '../componants/home';

const screens = {
    Home:{
        screen:Home
    },
    Days:{
        screen:Days
    },
    Todo:{
        screen:Todo

    }
}

const homeStack= createStackNavigator(screens)
export default createAppContainer(homeStack);
