import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from './screens/MainScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {CatalogScreen} from './screens/CatalogScreen';
import {AboutAppScreen} from './screens/AboutAppScreen';
import {ContactScreen} from './screens/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MainFlow = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainScreen" component={MainScreen}/>
            <Stack.Screen name="AboutAppScreen" component={AboutAppScreen}/>
        </Stack.Navigator>
    )
}
const CatalogFlow = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CatalogScreen" component={CatalogScreen}/>
            <Stack.Screen name="ContactScreen" component={ContactScreen}/>
        </Stack.Navigator>
    )
}

export const AppNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MainScreen" component={MainFlow} />
            <Tab.Screen name="Catalog" component={CatalogFlow} />
        </Tab.Navigator>
    )
}
