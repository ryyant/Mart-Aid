import React, { useState } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../../components/Screen";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Request({ navigation, route }) {
  console.log(route.params.name);

  const [modalVisible, setModalVisible] = useState(false);
  const [todoText, setTodoText] = useState("");

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
      <Screen styles={styles.container}>
        <View>
          <Text style={styles.title}>Name :</Text>
          <Text style={styles.input}>{route.params.name}</Text>
          <Text style={styles.title}>Address :</Text>
          <Text style={styles.input}>{route.params.address}</Text>
        </View>
        <Text style={styles.title}>Shopping List :</Text>
        <View style={styles.list}>
          <FlatList data={route.params.list} renderItem={renderItem} keyExtractor={(item) => item.id}/>
        </View>
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
  textContainer: {
    color: "black",
    alignSelf: "flex-start",
    fontFamily: "Avenir",
    padding: 10,
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 15,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 14,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: "#CADEFC",
    position: "absolute",
  },
  buttonClose: {
    backgroundColor: "#CADEFC",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    color: "black",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
  list: {
    width: "100%",
  },
  backbutton: {
    fontSize: 15,
    fontFamily: "Avenir",
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
