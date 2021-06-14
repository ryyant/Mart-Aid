import React from "react";
import { LogBox } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import RequestsScreen from "./src/screens/RequestsScreen";

const Stack = createStackNavigator();

const screens = [
  { name: "Loading", component: LoadingScreen },
  { name: "SignUp", component: SignUpScreen },
  { name: "Login", component: LoginScreen },
  { name: "Requests", component: RequestsScreen },
];

LogBox.ignoreLogs(["Setting a timer for a long period of"]);

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={screens[0].name} headerMode="none">
          {screens.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
