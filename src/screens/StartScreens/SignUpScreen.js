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
import HideKeyboard from "../../components/HideKeyboard";
import Screen from "../../components/Screen";

import * as Authentication from "../../../api/auth";

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
                name: "Main",
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
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        ></Image>

        <View style={styles.textContainer}>
          <Text style={styles.logoName}>Register.</Text>

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
                color = {"#0c4271"}
                name={isPasswordVisible ? "eye-off" : "eye"}
                onPress={() => setIsPasswordVisible((state) => !state)}
              />
            }
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
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
    backgroundColor: "#C3BEF0",
    flex: 1,
  },

  input: {
    height: 50,
    width: "80%",
    backgroundColor: "white",
    marginBottom: 20,
    fontSize: 15,
    opacity: 0.85,
  },

  logo: {
    position: "absolute",
    top: "25%",
    right: "60%",
    width: "90%",
    height: "45%",
    alignSelf: "center",
  },

  logoName: {
    marginTop: "50%",
    marginHorizontal: "10%",
    paddingBottom: "2%",
    fontSize: 50,
    fontFamily: "AvenirNext-Bold",
    alignSelf: "flex-end",
  },

  textContainer: {
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 18,
  },

  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#0c4271",
    width: "80%",
    height: "7%",
    borderRadius: 5,
    marginBottom: 15,
  },
});
