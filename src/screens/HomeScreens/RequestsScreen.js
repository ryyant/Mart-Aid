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
  Button,
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import Icon from "react-native-vector-icons/FontAwesome";

const db = firebase.firestore().collection("requests");

export default function RequestsScreen({ navigation }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const updatedRequests = collection.docs.map((doc) => doc.data());
      setRequests(updatedRequests);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /*   useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Add" />,
    });
  }) */

  /*   const requests = [
    { title: "Request1", id: "0" },
    { title: "Request2", id: "1" },
    { title: "Request3", id: "2" },
  ]; */

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
    <Screen styles={styles.container}>
      <View style={{ backgroundColor: "#c3bef0" }}>
        <Text style={styles.header}>Requests</Text>
      </View>
      <View>
        <Text>
          <FlatList
            data={requests}
            renderItem={renderItem}
            style={{ width: "100%" }}
            keyExtractor={(item) => item.id.toString()}
          />
        </Text>
      </View>
      <View>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffdf1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#defcf9",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
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
});
