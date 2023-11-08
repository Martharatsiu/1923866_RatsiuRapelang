import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../global/styles';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import {ClientStack} from './clientStack';
import MySearchScreen from '../screens/MySearchScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const clientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <clientTabs.Navigator
      tabBarOption={{
        activeIntColor: colors.buttons,
      }}>
      <clientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <clientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Donations',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <clientTabs.Screen
        name="MySearchScreen"
        component={MySearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <clientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </clientTabs.Navigator>
  );
}
