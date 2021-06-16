import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import YourListingScreen from "../screens/ProfileScreens/YourListingScreen";
import AcceptedListingScreen from "../screens/ProfileScreens/AcceptedListingScreen";
import Screen from '../components/Screen'

const profileStack = createMaterialTopTabNavigator();
export default () => {
  return (
    <Screen style={styles.container}>
      <View style={{ backgroundColor: "#c3bef0" }}>
        <Text style={styles.header}>Profile</Text>
      </View>
      <profileStack.Navigator initialRouteName="All">
        <profileStack.Screen
          name="All"
          component={YourListingScreen}
          options={{ tabBarLabel: "Your Listings" }}
        />
        <profileStack.Screen
          name="Add"
          component={AcceptedListingScreen}
          options={{ tabBarLabel: "Accepted Listings" }}
        />
      </profileStack.Navigator>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3bef0",
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
  },
});
