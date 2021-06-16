import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import HideKeyboard from "../../components/HideKeyboard";
import Screen from "../../components/Screen";
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
        setIsLoginLoading(false);
        return console.error(error);
      }
    );}

  return (
    <HideKeyboard>
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        ></Image>
        <Text style={styles.logoName}>Mart-Aid.</Text>

        <View style={styles.textContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            mode="flat"
            theme={{
              colors: {
                primary: "black",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            label="Email address"
            placeholder="e.g. harrystyles@mail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
            style={styles.input}
            left={<TextInput.Icon name="account" color={"#0c4271"} />}
          />

          <TextInput
            ref={passwordTextInput}
            mode="flat"
            style={styles.input}
            label="Password"
            placeholder="e.g. iLoveHarry"
            theme={{
              colors: {
                primary: "black",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
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
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          loading={isLoginLoading}
          disabled={isLoginLoading}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>New to Mart-Aid? </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
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
    left: "40%",
    width: "90%",
    height: "45%",
    alignSelf: "center",
  },

  logoName: {
    marginTop: "60%",
    marginHorizontal: "10%",
    paddingBottom: "2%",
    fontSize: 55,
    fontFamily: "AvenirNext-Bold",
    alignSelf: "flex-start",
    color: "white",
  },

  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#0c4271",
    width: "80%",
    height: "5%",
    borderRadius: 5,
    marginBottom: 15,
  },

  buttonText: {
    color: "white",
    fontFamily: "Avenir",
    fontWeight: "600",
    fontSize: 18,
  },

  signUpText: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    fontFamily: "Avenir",
    fontWeight: "600",
  },

  textContainer: {
    alignItems: "center",
  }
});
