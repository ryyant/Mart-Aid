import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YourListingScreen from '../screens/ProfileScreens/YourListingScreen';
import AcceptedListingScreen from '../screens/ProfileScreens/AcceptedListingScreen';

const profileStack = createMaterialTopTabNavigator();
export default () => {
  return (
    <SafeAreaView style={styles.container}>
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
});