import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import HideKeyboard from "../components/HideKeyboard";

import Screen from "../components/Screen";

import * as Authentication from "../../api/auth";
import { Merriweather_400Regular } from "@expo-google-fonts/merriweather";
import { back } from "react-native/Libraries/Animated/src/Easing";

export default ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [username, onChangeName] = React.useState("");
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleRegister = () => {
    Keyboard.dismiss();
    setIsRegisterLoading(true);

    Authentication.register(
      { name: username, email, password },
      (user) =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "Requests",
                params: { name: user.displayName },
              },
            ],
          })
        ),
      (error) => {
        setIsRegisterLoading(false);
        return console.error(error);
      }
    );
  };

  return (
    <HideKeyboard>
      <Screen scrollable style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/Logo.png")}
        ></Image>

        <View style={styles.textContainer}>
          <Text style={styles.registerText}>Register a New Account</Text>

          <TextInput
            label="Your name"
            placeholder="e.g. Harry Styles"
            style={styles.input}
            onChangeText={onChangeName}
            value={username}
            autoCapitalize="words"
            returnKeyType="next"
            blurOnSubmit={false}
            theme={{
              colors: {
                primary: "black",
                underlineColor: "transparent",
                background: "#0c4271",
              },
            }}
            left={<TextInput.Icon name="account" color={"#0c4271"} />}
          />

          <TextInput
            style={styles.input}
            label="Email"
            placeholder="e.g. harrystyles@mail.com"
            theme={{ colors: { primary: "black" } }}
            onChangeText={onChangeEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            value={email}
            onSubmitEditing={() => passwordTextInput.current.focus()}
            left={<TextInput.Icon name="at" color={"#0c4271"} />}
          />

          <TextInput
            mode="flat"
            label="Password"
            placeholder="e.g. iLoveHarry"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            theme={{
              colors: {
                primary: "black",
                underlineColor: "transparent",
                background: "#0c4271",
              },
            }}
            secureTextEntry={!isPasswordVisible}
            left={
              <TextInput.Icon name="form-textbox-password" color={"#0c4271"} />
            }
            right={
              <TextInput.Icon
                name={isPasswordVisible ? "eye-off" : "eye"}
                onPress={() => setIsPasswordVisible((state) => !state)}
              />
            }
          />

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backToLoginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9dfdc",
    flex: 1,
  },

  input: {
    height: 50,
    width: "90%",
    backgroundColor: "white",
    fontSize: 15,
    marginTop: 20,
  },

  font: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 5,
    marginLeft: 20,
    fontFamily: "Merriweather_400Regular",
    fontSize: 18,
    alignSelf: "flex-start",
  },

  loginButton: {
    transform: [{ scale: 0.5 }],
  },

  logo: {
    marginTop: 70,
    height: "40%",
    resizeMode: "contain",
    alignSelf: "center",
  },

  registerText: {
    fontSize: 30,
    fontFamily: 'AvenirNext-Bold',
    alignSelf: "center",
    color: "black",
  },

  signUpButton: {
    transform: [{ scale: 0.5 }],
  },
  textContainer: {
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Merriweather_400Regular",
  },

  backToLoginButton: {
    padding: 20,
    marginTop: 25,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0c4271",
    width: "50%",
    borderRadius: 55,
  },

  signUpButton: {
    padding: 20,
    marginTop: 25,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0c4271",
    width: "38%",
    borderRadius: 55,
  },
});
