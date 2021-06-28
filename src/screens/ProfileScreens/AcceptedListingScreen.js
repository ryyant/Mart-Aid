import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { getCurrentUserId } from "../../../api/auth";


export default function ({ navigation }) {
  const [requests, setRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());

  useEffect(() => {
    setCurrentUser(getCurrentUserId());
  }, []);

  useEffect(() => {
    const db = firebase
      .firestore()
      .collection("requests")
      .where("acceptedBy", "==", currentUser);
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
            navigation.navigate("Accepted Request", { ...item });
          }}
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

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/Logo.png")}
      ></Image>
      <View>
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
    padding: 20,
    borderBottomColor: "#CCA8E9",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
<<<<<<< HEAD
  },
=======
    },
>>>>>>> 237762bfdcb29bf6f9a52e41ddbcfd6e8c0f6864

  logo: {
    position: "absolute",
    bottom: "0%",
    left: "70%",
    width: "16%",
    height: "10%",
    alignSelf: "center",
  },
  logOutButton: {
    position: "absolute",
    top: "95%",
    right: "5%",
  },
});
