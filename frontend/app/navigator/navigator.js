import React from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ConfigScreen from '../screens/config_screen/config_screen';
import GroupScreen from '../screens/group_screen/group_screen';
import HomeScreen from '../screens/home_screen/home_screen';
import StatisticsScreen from '../screens/statistics_screen/statistics_screen';
import types from './types';

function TabBarIcon({ route, focused }) {
    const tabIcons = { Home: 'home', Statistics: 'bar-chart', Group: 'users', Config: 'cog' };

    return (
        <FontAwesome name={tabIcons[route.name]} style={{ color: focused ? '#000000' : '#ffffff', fontSize: 20 }} />
    );
};
TabBarIcon.propTypes = types.tabBarIcon;

const Tab = createBottomTabNavigator();
function Navigatior() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"Home"}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => <TabBarIcon route={route} focused={focused} />,
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: '#000000',
                    tabBarActiveBackgroundColor: '#f4c845',
                    tabBarInactiveBackgroundColor: '#000000',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Group" component={GroupScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Config" component={ConfigScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigatior;
