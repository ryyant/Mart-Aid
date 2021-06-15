import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RequestsScreen from "../HomeScreens/RequestsScreen";
import NewRequestSc from "../HomeScreens/NewRequest";


const homeStack = createStackNavigator();

const screens = [
  { name: "Requests", component: RequestsScreen },
  { name: "New Request", component: NewRequestSc}
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