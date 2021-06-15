import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator, Image } from 'react-native';
import { CommonActions } from "@react-navigation/native";
import HideKeyboard from '../../components/HideKeyboard';
import Screen from '../../components/Screen';

import * as Authentication from "../../../api/auth";

export default ({ navigation }) => {
    useEffect(() => {
        return Authentication.setOnAuthStateChanged(
            () => navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "Login" }] })),
            () => navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "Login" }] })),
        );    
    }, []);
  
    return (
        <HideKeyboard>

        <Screen style={styles.screen}>
            <Image style={styles.logo} source={require('../../../assets/Logo.png')}></Image>
            <ActivityIndicator animating size="large" color="black" />
        </Screen>
        </HideKeyboard>

    );
  }

const styles = StyleSheet.create({
    logo: {
        resizeMode: "center"
    },
    screen: {
        backgroundColor: '#C3BEF0',
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
      }
})