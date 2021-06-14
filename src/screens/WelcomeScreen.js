import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require('../../assets/duckymomo.png')}></Image>
            
            <TouchableOpacity style={styles.loginButton}>
                <Image source={require('../../assets/login-button.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton}>
                <Image source={require('../../assets/sign-up-button.png')}></Image>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffdf1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'center',
        position: 'absolute',
        alignSelf: 'center',
        top: 150,
    },
    loginButton: {
        transform: [{scale: 0.5}],
        position: 'absolute',
        top: 320,
        left: -25
    },
    signUpButton: {
        position: 'absolute',
        transform: [{scale: 0.5}],
        top: 400,
        right: -25
    }
})