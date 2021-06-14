import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import { CommonActions } from "@react-navigation/native"

import Screen from "../components/Screen";

import * as Authentication from '../../api/auth';

export default ({ navigation }) => {
    const [ email, onChangeEmail ] = React.useState("");
    const [ password, onChangePassword ] = React.useState("");
    const [ username, onChangeName ] = React.useState("");
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    
    const handleRegister = () => {
        Keyboard.dismiss();
        setIsRegisterLoading(true);
    
        Authentication.register(
            { name: username, email, password },
            (user) => navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{
                name: "Main",
                params: { name: user.displayName }
                }]
            })),
            (error) => {
                setIsRegisterLoading(false);
                return console.error(error);
            }
            );
        }

    return (
        <Screen scrollable style={styles.container}>

            <Image style={styles.logo} source={require('../../assets/duckymomo.png')}></Image>

            <View style={styles.textContainer}>

                <Text style={styles.font}>
                    Full name
                </Text>

                <TextInput 
                    label="Your name"
                    placeholder="e.g., Albert Einstein Tan Chow Boon"
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={username} 
                    autoCapitalize="words"
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                
                <Text style={styles.font}>
                    Email address
                </Text>

                <TextInput 
                    mode="outlined"
                    label="Email address"
                    placeholder="e.g., josh@example.com"
                    keyboardType="email-address"
                    style={styles.input} 
                    onChangeText={onChangeEmail}
                    value={email}
                    autoCapitalize="none"
                    returnKeyType="next"
                    blurOnSubmit={false}
                />

                <Text style={styles.font}>
                    Password
                </Text>

                <TextInput 
                    mode="outlined"
                    label="Password"
                    placeholder="e.g., who knows?"
                    autoCapitalize="none"
                    style={styles.input} 
                    onChangeText={onChangePassword}
                    value={password}
                />

                <TouchableOpacity style={styles.signUpButton} onPress={handleRegister}>
                    <Image source={require('../../assets/sign-up-button.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                    <Image source={require('../../assets/login-button.png')}></Image>
                </TouchableOpacity>

            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffdf1',
        flex: 1,
    },
    font: {
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 5,
    },
    input: {
        backgroundColor: "#e1e1e1",
        height: 40,
        width: 320,
        borderWidth: 1,
        borderColor: "#d0d0d0",
    },
    loginButton: {
        transform: [{scale: 0.5}]
    },
    logo: {
        resizeMode: 'center',
        alignSelf: 'center',
    },
    signUpButton: {
        transform: [{scale: 0.5}]
    },
    textContainer: {
        alignItems: 'center'
    }
})