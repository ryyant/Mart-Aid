import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Keyboard, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { CommonActions } from "@react-navigation/native";
import HideKeyboard from '../../components/HideKeyboard';
import Screen from '../../components/Screen';
import * as Authentication from "../../../api/auth";

export default ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const passwordTextInput = useRef();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const handleLogin = () => {
      Keyboard.dismiss();
      setIsLoginLoading(true);
  
      Authentication.login(
        { email, password },
        (user) => navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{
            name: "Main",
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
        <HideKeyboard>
        <Screen scrollable style={styles.container}>
            
            <Image style={styles.logo} source={require('../../../assets/Logo.png')}></Image>
            <Text style={styles.logoName}>Mart-Aid</Text>

            
            <View style={styles.textContainer}>
            <TextInput 
                value={email} 
                onChangeText={setEmail} 
                mode="flat"
                theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}
                label="Email address" 
                placeholder="Your e-mail" 
                keyboardType="email-address" 
                autoCapitalize="none" 
                returnKeyType="next" 
                blurOnSubmit={false} 
                style={styles.input} 
                left={<TextInput.Icon name="account" color={'#0c4271'} />}

            />

            <TextInput
                ref={passwordTextInput}
                mode="flat"
                style={styles.input}
                label="Password"
                theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
                left={<TextInput.Icon name="form-textbox-password" color={'#0c4271'} />}
                right={<TextInput.Icon name={isPasswordVisible ? 'eye-off' : 'eye'} onPress={() => setIsPasswordVisible((state) => !state)} />}
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
                <Text style={styles.signUpText}>New to Mart-Aid? </Text>

                <TouchableOpacity 
                style={styles.button2}
                onPress={() => navigation.navigate("SignUp")}
                >
                <Text style={styles.buttonText}>Register Here!</Text>

                </TouchableOpacity>
            </View>

        </Screen>
        </HideKeyboard>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9dfdc',
        flex: 1,
    },

    input: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        marginTop: 20,
        fontSize: 15,
    },

    logo: {
        marginTop: 70,
        height: '60%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    logoName: {
        fontSize: 55,
        fontFamily: 'AvenirNext-Bold',
        alignSelf: 'center',
    },

    button: {
        padding: 15,
        marginTop: 15,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#0c4271' ,
        width: '30%',
        borderRadius: 55
    },

    button2: {
        padding: 15,
        marginTop: 15,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#0c4271' ,
        width: '50%',
        borderRadius: 55
    },

    buttonText: {
        color: 'white',
        fontFamily: 'Merriweather_400Regular'

    },

    signUpContainer: {
        alignItems: 'center',
        color: 'blue'

    },

    signUpText: {
        color: 'black',
        marginTop: 15,
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '600'
    },

    textContainer: {
        alignItems: 'center',
        
    },
})