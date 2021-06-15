import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RequestsScreen from "../HomeScreens/RequestsScreen";
import NewRequestSvc from "../HomeScreens/RequestsScreen";


const homeStack = createStackNavigator();

const screens = [
  { name: "Requests", component: RequestsScreen },
];

export default () => {
  return (
      <homeStack.Navigator initialRouteName={screens[0].name} headerMode="none" screenOptions={{ animationEnabled: false }} mode="modal">
        {screens.map(({ name, component }) => (
          <homeStack.Screen key={name} name={name} component={component} />
        ))}
      </homeStack.Navigator>
  );
}