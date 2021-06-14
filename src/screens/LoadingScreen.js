import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator, Image } from 'react-native';
import { CommonActions } from "@react-navigation/native";

import Screen from "../components/Screen";

import * as Authentication from "../../api/auth";

export default ({ navigation }) => {
    useEffect(() => {
        return Authentication.setOnAuthStateChanged(
            () => navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "Login" }] })),
            () => navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "Login" }] })),
        );    
    }, []);
  
    return (
        <Screen style={styles.screen}>
            <Image style={styles.logo} source={require('../../assets/duckymomo.png')}></Image>
            <ActivityIndicator animating size="large" color="black" />
        </Screen>
    );
  }

const styles = StyleSheet.create({
    logo: {
        resizeMode: "center"
    },
    screen: {
        backgroundColor: '#fffdf1',
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
      }
})