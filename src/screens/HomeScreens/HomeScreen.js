import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import SecondIcon from 'react-native-vector-icons/Entypo';
import SearchBar from "../../components/SearchBar";
import { getCurrentUserId } from "../../../api/auth";



export default function HomeScreen({ navigation }) {
  const [requests, setRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());

  useEffect(() => setCurrentUser(getCurrentUserId()));

  useEffect(() => {
    const db = firebase.firestore().collection("requests").where('id', '!=', currentUser).where('accepted','==', false);
    const unsubscribe = db.onSnapshot((collection) => {
      const updatedRequests = collection.docs.map((doc) => doc.data());
      setRequests(updatedRequests);
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
          onPress={() => {
            navigation.navigate("Request", {...item})
          }
          }
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 19, width: "90%", fontFamily: 'Avenir', fontWeight:'bold'}}>{item.address}</Text>
            <Icon name="angle-double-right" size={30} color="black" />
          </View>
          <Text style={{fontFamily: 'Avenir'}}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function addRequest() {
    navigation.navigate("New Request")
  }

  return (
    <>
  <View style={{ backgroundColor: "#c3bef0", paddingTop:"12%" }}>
    <TouchableOpacity
      style={styles.logOutButton}
      onPress={() => {
        navigation.navigate("Login");
      }}
    >
      <Icon name="sign-out" size={35} color="black" />
    </TouchableOpacity>

    <Text style={styles.header}>Requests</Text>
  </View>
    <Screen style={styles.container}>
      <SearchBar/>
        <View style={{flex: 1}}>
            <FlatList
              data={requests}
              renderItem={renderItem}
              style={{width: "100%" }}
              keyExtractor={(item) => item.id.toString()}
            />
        </View>
        <View > 
          <TouchableOpacity
            style={styles.footer}
            onPress={addRequest}
          >
            <SecondIcon style={styles.icon} name="add-to-list" size={23} color="#676B6B" />
            <Text style = {styles.newRequest}>New Request</Text>
          </TouchableOpacity>
        </View>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
  },
  request: {
    padding: 20,
    borderBottomColor: "#CCA8E9",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: "center",
    width: '80%',
    position: "absolute",
    bottom: 10,
    height: 40,
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

  newRequest: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: '600'
  },

  logOutButton: {
    position: "absolute",
    top: "95%",
    right: "5%",
  },
});