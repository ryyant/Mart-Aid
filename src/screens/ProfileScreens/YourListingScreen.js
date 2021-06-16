import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import { getCurrentUserId } from "../../../api/auth";
import Icon from "react-native-vector-icons/FontAwesome";



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
<<<<<<< HEAD
    
    <Screen styles={styles.container}>
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
=======
    <Screen style={styles.container}>
      <View>
>>>>>>> caa3240178fad4df4c8171173954c572d263b54e
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
  logOutButton: {
    position: "absolute",
    top: "95%",
    right: "5%",
  },
});
