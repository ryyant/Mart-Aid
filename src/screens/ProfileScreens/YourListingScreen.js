import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import { getCurrentUserId } from "../../../api/auth";


export default function ({ navigation }) {
  const [request, setRequest] = useState("");
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());

  useEffect(() => {
    setCurrentUser(getCurrentUserId())
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
    <Screen style={styles.container}>


  <Image
    style={styles.logo}
    source={require("../../../assets/Logo.png")}
  ></Image>
      <View>
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


  logo: {
    position: "absolute",
    bottom: "0%",
    left: "70%",
    width: "16%",
    height: "10%",
    alignSelf: "center",
  },
});
