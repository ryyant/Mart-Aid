import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileTab from '../screens/BottomNav/ProfileTab';
import HomeTab from '../screens/BottomNav/HomeTab';

const bottomTab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <bottomTab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: '#F8F5F1' }}>
      <bottomTab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />

      <bottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle" color={color} size={26} />,
        }}
      />
    </bottomTab.Navigator>
  );
};