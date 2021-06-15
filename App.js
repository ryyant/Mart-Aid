import React from "react";
import { LogBox } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from 'expo-app-loading';

import LoginScreen from "./src/screens/StartScreens/LoginScreen";
import SignUpScreen from "./src/screens/StartScreens/SignUpScreen";
import LoadingScreen from "./src/screens/StartScreens/LoadingScreen";
import BottomBar from "./src/components/BottomBar";

import { useFonts, Merriweather_700Bold, Merriweather_400Regular } from '@expo-google-fonts/merriweather';

const Stack = createStackNavigator();

const screens = [
  { name: "Loading", component: LoadingScreen },
  { name: "SignUp", component: SignUpScreen },
  { name: "Login", component: LoginScreen },
  { name: "Main", component: BottomBar },
];

LogBox.ignoreLogs(["Setting a timer for a long period of"]);

export default function App() {
  let [fontsLoaded] = useFonts({
    Merriweather_700Bold, Merriweather_400Regular
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
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
