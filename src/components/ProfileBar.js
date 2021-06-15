import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YourListingScreen from '../screens/ProfileScreens/YourListingScreen';
import AcceptedListingScreen from '../screens/ProfileScreens/AcceptedListingScreen';

const profileStack = createMaterialTopTabNavigator();
export default () => {
  return (
    <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: "#c3bef0" }}>
        <Text style={styles.header}>Profile</Text>
      </View>
      <profileStack.Navigator initialRouteName="All">
        <profileStack.Screen name="All" component={YourListingScreen} options={{ tabBarLabel: 'Your Listings' }} />
        <profileStack.Screen name="Add" component={AcceptedListingScreen} options={{ tabBarLabel: 'Accepted Listings' }} />
      </profileStack.Navigator>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AA397',
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
  },
  header: {
    color: "#defcf9",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
  },
});