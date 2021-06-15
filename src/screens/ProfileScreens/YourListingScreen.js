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
  ScrollView,
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import { getCurrentUserId } from "../../../api/auth";

const currentUser = getCurrentUserId();
const docRef = firebase.firestore().collection("requests").doc(currentUser);

export default function ({ navigation }) {
  const [request, setRequest] = useState("");

  useEffect(() => {
    const unsubscribe = docRef.onSnapshot((doc) => {
      const updatedRequest = doc.data();
      console.log(doc.data());
      setRequest(updatedRequest);
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
  return (
    <Screen styles={styles.container}>
      <View>
        <Text style={styles.title}>Name :</Text>
        <Text style={styles.input}>{request.name}</Text>
        <Text style={styles.title}>Address :</Text>
        <Text style={styles.input}>{request.address}</Text>
      </View>
      <Text style={styles.title}>Shopping List :</Text>
      <View style={styles.list}>
        <FlatList data={request.list} renderItem={renderItem} />
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
});
