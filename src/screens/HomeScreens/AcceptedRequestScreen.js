import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../../components/Screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { getCurrentUserId } from "../../../api/auth";
import firebase from "../../../api/firebase";

export default function AcceptedRequestScreen({ navigation, route }) {
  const db = firebase.firestore().collection("requests");
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());

  useEffect(() => {
    setCurrentUser(getCurrentUserId());
  }, []);

  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#CCA8E9",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item}</Text>
      </View>
    );
  }

  function acceptRequest() {
    db.doc(route.params.id).update({
      acceptedBy: currentUser,
      accepted: true
    });
    navigation.navigate("Home");
  }

  return (
    <>
      <View style={{ backgroundColor: "#c3bef0", paddingTop: "14%" }}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-left" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}> Request </Text>
      </View>
      <Screen style={styles.container}>
        <View>
          <Text style={styles.title}>Name :</Text>
          <Text style={styles.input}>{route.params.name}</Text>
          <Text style={styles.title}>Address :</Text>
          <Text style={styles.input}>{route.params.address}</Text>
          <Text style={styles.title}>Shopping List :</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            style={{ width: "100%" }}
            data={route.params.list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatText}>Chat</Text>
        </TouchableOpacity>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backButton: {
    position: "absolute",
    top: "110%",
    left: "3%",
  },

  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
  },

  title: {
    color: "#150E56",
    fontWeight: "bold",
    fontSize: 15,
    padding: 10,
    paddingBottom: 5,
    paddingTop: 20,
    fontFamily: "Avenir",
  },

  input: {
    fontSize: 15,
    fontFamily: "Avenir",
    paddingLeft: 10,
  },

  list: {
    flex: 1,
  },

  AcceptRequest: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 40,
    bottom: 10,
    backgroundColor: "#CADEFC",
    borderRadius: 30,
    color: "grey",
    flexDirection: "row",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  icon: {
    paddingRight: 8,
  },

  chatButton: {
    borderWidth: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: '20%',
    height: '5%',
    borderRadius: 10,
    bottom: '3%',
    right: '3%'
  },
  
  chatText: {
    alignSelf: 'center',
    fontFamily: "Avenir"
  }

});
