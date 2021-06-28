import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
<<<<<<< HEAD
=======
  TouchableOpacity,
  Image
>>>>>>> 237762bfdcb29bf6f9a52e41ddbcfd6e8c0f6864
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import { getCurrentUserId } from "../../../api/auth";



export default function ({ navigation }) {
  const [request, setRequest] = useState("");
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());

  const docRef = firebase
    .firestore()
    .collection("requests")
    .doc(currentUser.toString());

  useEffect(() => {
    setCurrentUser(getCurrentUserId())
  }, []);

  useEffect(() => {
    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
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
        style={styles.request}
      >
        <Text>{item}</Text>
      </View>
    );
  }

  function deleteListing() {
    docRef.delete();
    setRequest('');
  }

  return (
    <Screen style={styles.container}>
<<<<<<< HEAD
      <View>

=======
      <View style={{paddingTop: 10, paddingLeft: 5}}>
>>>>>>> 237762bfdcb29bf6f9a52e41ddbcfd6e8c0f6864
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
      <Image
        style={styles.logo}
        source={require("../../../assets/Logo.png")}
      ></Image>
      <TouchableOpacity style={styles.deleteButton} onPress={deleteListing}>
        <Text style={styles.input}>Clear</Text>
      </TouchableOpacity>
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
    borderBottomColor: "#CCA8E9",
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
    fontWeight: "bold",
  },
  logOutButton: {
    position: "absolute",
    top: "95%",
    right: "5%",
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
  },

  deleteButton: {
    position: "absolute",
    bottom: "2%",
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    width: "30%",
  }
>>>>>>> 237762bfdcb29bf6f9a52e41ddbcfd6e8c0f6864
});
