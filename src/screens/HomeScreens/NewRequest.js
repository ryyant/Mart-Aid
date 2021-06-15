import React, { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import HideKeyboard from "../../components/HideKeyboard";

export default function NewRequest({ navigation }) {
  const SAMPLE = [
    { title: "Milk Meji 1L x1", id: "0", done: false },
    { title: "Mala Chips Calbee 500g x2", id: "1", done: false },
  ];

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
        <Text>{item.title}</Text>
      </View>
    );
  }

  const backToRequests = "< Back to Requests";

  return (
    <>
      <View style={{ backgroundColor: "#c3bef0", paddingTop: 55 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.backbutton}>{backToRequests}</Text>
        </TouchableOpacity>
        <Text style={styles.header}> New Request </Text>
      </View>
      <HideKeyboard>
        <Screen styles={styles.container}>
          <View>
            <Text style={styles.title}>Name :</Text>
            <TextInput placeholder="eg. Lim Kah Shing" style={styles.input} />
            <Text style={styles.title}>Address :</Text>
            <TextInput
              placeholder="eg. Yishun Ave 2 Blk 21 #04-51"
              style={styles.input}
            />
          </View>

          <Text style={styles.title}>Shopping List :</Text>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <HideKeyboard>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTitle}>Add new item!</Text>
                  <Text style={styles.modalText}>Item Name:</Text>
                  <TextInput
                    onChangeText={(text) => setTodoText(text)}
                    placeholder="e.g.Milk"
                    placeholderTextColor="#B8BDBD"
                    style={styles.modalText}
                  />
                  <Text style={styles.modalText}>Brand Name:</Text>
                  <TextInput
                    placeholder="e.g. Meji"
                    placeholderTextColor="#B8BDBD"
                    style={styles.modalText}
                  />
                  <Text style={styles.modalText}>Item Size:</Text>
                  <TextInput
                    placeholder="e.g 1L/500g/1 packet"
                    style={styles.modalText}
                    placeholderTextColor="#B8BDBD"
                  />
                  <Text style={styles.modalText}>Quantity:</Text>
                  <TextInput
                    placeholder="e.g. 3"
                    placeholderTextColor="#B8BDBD"
                    style={styles.modalText}
                  />

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Done</Text>
                  </Pressable>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
              </HideKeyboard>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Add new Item!</Text>
            </Pressable>
          </View>

          <View style={styles.list}>
            <FlatList data={SAMPLE} renderItem={renderItem} />
          </View>
        </Screen>
      </HideKeyboard>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffdf1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontSize: 30,
    fontFamily: "Avenir",
  },
  header: {
    color: "#defcf9",
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
    paddingTop: 10,
    width: "100%",
  },
  backbutton: {
    fontSize: 15,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
});
