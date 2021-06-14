import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import { CommonActions } from "@react-navigation/native"
import { TextInput } from 'react-native-paper';
import HideKeyboard from '../components/HideKeyboard';


import Screen from "../components/Screen";

import * as Authentication from '../../api/auth';
import { Merriweather_400Regular } from '@expo-google-fonts/merriweather';
import { back } from 'react-native/Libraries/Animated/src/Easing';

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
        <HideKeyboard>

        <Screen scrollable style={styles.container}>

            <Image style={styles.logo} source={require('../../assets/Logo.png')}></Image>

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
                    theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}

                />
                
                <Text style={styles.font}>
                    Email address
                </Text>

                <TextInput 
                    mode="flat"
                    label="Email address"
                    placeholder="e.g., josh@example.com"
                    keyboardType="email-address"
                    style={styles.input} 
                    onChangeText={onChangeEmail}
                    value={email}
                    autoCapitalize="none"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}

                />

                <Text style={styles.font}>
                    Password
                </Text>

                <TextInput 
                    mode="flat"
                    label="Password"
                    placeholder="e.g., who knows?"
                    autoCapitalize="none"
                    style={styles.input} 
                    onChangeText={onChangePassword}
                    value={password}
                    theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}

                />

                <TouchableOpacity style={styles.signUpButton} onPress={handleRegister}> 
                    <Image source={require('../../assets/sign-up-button.png')}></Image> 
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.backToLoginButton}
                    onPress={() => navigation.navigate("Login")}
                >

                <Text style={styles.backToLoginText}>Back to Login</Text>
                </TouchableOpacity>

            </View>

        </Screen>
        </HideKeyboard>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9dfdc',
        flex: 1,
    },
    font: {

        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 5,
        fontFamily: 'Merriweather_400Regular',
        fontSize: 18
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
        marginTop: 70,
        height: '40%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    signUpButton: {
        transform: [{scale: 0.5}]
    },
    textContainer: {
        alignItems: 'center'
    },

    backToLoginText: {
        color: 'white',
        fontFamily: 'Merriweather_400Regular'
    },

    backToLoginButton: {
        padding: 15,
        marginTop: 15,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#0c4271' ,
        width: '50%',
        borderRadius: 55
    }
})