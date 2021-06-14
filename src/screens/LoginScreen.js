import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Keyboard, Pressable } from 'react-native';
import { CommonActions } from "@react-navigation/native";

import Screen from "../components/Screen";
import * as Authentication from "../../api/auth";

export default ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const passwordTextInput = useRef();
  
    const handleLogin = () => {
      Keyboard.dismiss();
      setIsLoginLoading(true);
  
      Authentication.login(
        { email, password },
        (user) => navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{
            name: "Requests",
            params: { name: user.displayName }
          }]
        })),
        (error) => {
          setIsLoginLoading(false);
          return console.error(error);
        }
      );
    }

    return (
        <Screen scrollable style={styles.container}>
            
            <Image style={styles.logo} source={require('../../assets/Logo.png')}></Image>
            
            <View style={styles.textContainer}>
                <Text style={styles.font}>
                    Email address
                </Text>

                <TextInput
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                label="Email address"
                placeholder="Your duck mail"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                blurOnSubmit={false}
                style={styles.input} />

                <Text style={styles.font}>
                    Password
                </Text>

                <TextInput
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                label="Password"
                placeholder="Your secret quack"
                autoCapitalize="none"
                style={styles.input}
                />

            </View>

            <TouchableOpacity 
            style={styles.button}
            onPress={handleLogin}
            loading={isLoginLoading}
            disabled={isLoginLoading}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account?</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("SignUp")}
                >
                <Text style={styles.buttonText}>Register</Text>

                </TouchableOpacity>
            </View>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#defcf9',
        flex: 1,
    },
    font: {
        fontSize: 20,
        paddingTop: 30
    },
    input: {
        backgroundColor: "#e1e1e1",
        height: 40,
        width: 270,
        borderWidth: 1,
        borderColor: "#d0d0d0",
    },
    logo: {
        height: '40%',
        resizeMode: 'center',
        alignSelf: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black'
    },

    buttonText: {
        color: 'white'
    },

    signUpContainer: {
        alignItems: 'center',
    },
    signUpText: {
        fontSize: 20,
        paddingTop: 100
    },
    textContainer: {
        alignItems: 'center',
        
    }
})