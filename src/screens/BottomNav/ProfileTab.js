import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileBar from '../../components/ProfileBar';
import AcceptedRequestScreen from '../HomeScreens/AcceptedRequestScreen';

const profileStack = createStackNavigator();

const screens = [
  { name: "ProfileBar", component: ProfileBar },
  { name: 'Accepted Request', component: AcceptedRequestScreen }
];

export default () => {
  return (
      <profileStack.Navigator initialRouteName={screens[0].name} headerMode="none" screenOptions={{ animationEnabled: false }} mode="modal">
        {screens.map(({ name, component }) => (
          <profileStack.Screen key={name} name={name} component={component} />
        ))}
      </profileStack.Navigator>
  );
}