import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
=======
import {
  StyleSheet,
  View,
  Text,
  FlatList,
<<<<<<< HEAD
=======
  TouchableOpacity,
>>>>>>> f7b5abdb76cc19e9c60caf6ab26537e9523ec505
} from "react-native";
>>>>>>> cee25de4a8b9ff54f663926acb180c188beff043
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import { getCurrentUserId } from "../../../api/auth";

export default function ({ navigation }) {
  const [request, setRequest] = useState("");
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());

  useEffect(() => {
    setCurrentUser(getCurrentUserId());
  }, []);

  useEffect(() => {
    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exist) {
        const updatedRequest = doc.data();
        setRequest(updatedRequest);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "black",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item}</Text>
      </View>
    );
  }

  const docRef = firebase.firestore().collection("requests").doc(currentUser);

  return (
<<<<<<< HEAD
    <Screen style={styles.container}>
      <View>

=======
<<<<<<< HEAD
    <Screen style={styles.container}>


  <Image
    style={styles.logo}
    source={require("../../../assets/Logo.png")}
  ></Image>
=======
    <Screen styles={styles.container}>
>>>>>>> cee25de4a8b9ff54f663926acb180c188beff043
      <View>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Icon name="sign-out" size={35} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Name :</Text>
>>>>>>> f7b5abdb76cc19e9c60caf6ab26537e9523ec505
        <Text style={styles.input}>{request.name}</Text>
        <Text style={styles.input}>{request.address}</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={request.list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontFamily: "Avenir",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  input: {
    fontFamily: "Avenir",
    fontSize: 16,
    padding: 5,
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
