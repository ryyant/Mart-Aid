import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Header,
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { getCurrentUserId } from "../../../api/auth";

const currentUser = getCurrentUserId();
const db = firebase
  .firestore()
  .collection("requests")
  .where("acceptedBy", "==", currentUser);

export default function ({ navigation }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    console.log(currentUser);
    const unsubscribe = db.onSnapshot((querySnapshot) => {
      var helper = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data().name)
        helper.push(doc.data());
      });
      setRequests(helper);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function renderItem({ item }) {
    return (
      <View style={styles.request}>
        <TouchableOpacity
          style={{
            width: "100%",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, width: "90%" }}>{item.address}</Text>
            <Icon name="angle-double-right" size={30} color="black" />
          </View>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Screen style={styles.container}>

  <Image
    style={styles.logo}
    source={require("../../../assets/Logo.png")}
  ></Image>

      <View>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Icon name="sign-out" size={35} color="black" />
        </TouchableOpacity>
        <FlatList
          data={requests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    color: "#defcf9",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
  },
  request: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
<<<<<<< HEAD
  
=======

  logo: {
    position: "absolute",
    bottom: "0%",
    left: "70%",
    width: "16%",
    height: "10%",
    alignSelf: "center",
  logOutButton: {
    position: "absolute",
    top: "95%",
    right: "5%",
  },
>>>>>>> f7b5abdb76cc19e9c60caf6ab26537e9523ec505
});
