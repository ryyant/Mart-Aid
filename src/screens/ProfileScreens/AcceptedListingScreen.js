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
const db = firebase.firestore();

export default function ({ navigation }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    db.collection("requests")
      .where("acceptedBy", "==", currentUser)
      .onSnapshot((querySnapshot) => {
        var helper = [];
        querySnapshot.forEach((doc) => {
          helper.push(doc.data());
        });
        setRequests(helper);
      });
  },[]);

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
  logOutButton: {
    position: "absolute",
    top: "95%",
    right: "5%",
  },
});
