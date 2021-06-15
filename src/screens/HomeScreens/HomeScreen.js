import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Screen from "../../components/Screen";
import firebase from "../../../api/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import SecondIcon from 'react-native-vector-icons/Entypo'

const db = firebase.firestore().collection("requests");

export default function HomeScreen({ navigation }) {
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

  function renderItem({ item }) {
    return (
      <View style={styles.request}>
        <TouchableOpacity
          style={{
            width: "100%",
          }}
          onPress={() => {
            navigation.navigate("Request")
          }
          }
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

  function addRequest() {
    navigation.navigate("New Request")
  }

  return (
    <>
    <View style={{ backgroundColor: "#c3bef0", paddingTop:45 }}>
    <Text style={styles.header}>Requests</Text>
  </View>
    <Screen style={styles.container}>
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
        <View > 
          <TouchableOpacity
            style={styles.footer}
            onPress={addRequest}
          >
            <SecondIcon style={styles.icon} name="add-to-list" size={27} color="#676B6B" />
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
  footer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 168,
    position: "absolute",
    bottom: 10,
    left:99,
    height: 70,
    backgroundColor: "#DDF5F5",
    borderRadius: 40,
    color:'grey',
    flexDirection:'row',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  icon: {
    paddingRight:8
  },
  newRequest: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: '600'
  }
});

{
  /* <TouchableOpacity
style={{
  borderWidth: 1,
  borderColor: "rgba(0,0,0,0.2)",
  alignItems: "center",
  justifyContent: "center",
  width: 70,
  position: "absolute",
  bottom: 10,
  right: 10,
  height: 70,
  backgroundColor: "#fff",
  borderRadius: 100,
}}
>
<Icon name="rocket" size={50} color="#01a699" />
</TouchableOpacity> */
}
