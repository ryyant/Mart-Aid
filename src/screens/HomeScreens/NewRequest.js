import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../../components/Screen";
import HideKeyboard from "../../components/HideKeyboard";
<<<<<<< HEAD
import Icon from "react-native-vector-icons/FontAwesome";
=======
import Icon from 'react-native-vector-icons/AntDesign'
>>>>>>> 96a1f1b6580c51314e4124e0133f31c68f5b6f8d

export default function NewRequest({ navigation }) {
  const SAMPLE = [
    { title: "Milk Meji 1L x1", id: "0", done: false },
    { title: "Mala Chips Calbee 500g x2", id: "1", done: false },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [todoText, setTodoText] = useState("");

  function renderItem({ item }) {
    return (
      <View style={styles.request}>
        <Text>{item.title}</Text>
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
        <Text style={styles.header}>New Request</Text>
      </View>
      <HideKeyboard>
        <Screen style={styles.container}>
          <View>
            <Text style={styles.title}>Name:</Text>
            <TextInput placeholder="eg. Lim Kah Shing" style={styles.input} />
            <Text style={styles.title}>Address:</Text>
            <TextInput
              placeholder="eg. Yishun Ave 2 Blk 21 #04-51"
              style={styles.input}
            />
          </View>

          <Text style={styles.title}>Shopping List:</Text>

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
                      placeholder="e.g. Milk"
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

                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Cancel</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Done</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </HideKeyboard>
            </Modal>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
<<<<<<< HEAD
              <Text style={styles.textStyle}>Add Item</Text>
            </TouchableOpacity>

            <View style={styles.list}>
              <FlatList data={SAMPLE} renderItem={renderItem} />
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.footer} onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="cart-arrow-down"
                size={23}
                color="#676B6B"
              />
              <Text style={styles.textStyle}>LIST IT!</Text>
            </TouchableOpacity>
=======
              <Text style={styles.textStyle}><Icon name="pluscircle" size={16} color="black" />  Add new Item!</Text>
            </Pressable>
          </View>
          <View style={styles.list}>
            <FlatList data={SAMPLE} renderItem={renderItem} />
>>>>>>> 96a1f1b6580c51314e4124e0133f31c68f5b6f8d
          </View>
        </Screen>
      </HideKeyboard>
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
    fontSize: 35,
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
    alignItems: "center",
  },

  modalView: {
    marginTop: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 40,
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

  list: {
    flex: 1,
    width: "100%",
  },

  button: {
    marginVertical: 10,
    backgroundColor: "#CADEFC",
    width: "80%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  modalButton: {
    backgroundColor: "#CADEFC",
    width: "40%",
    height: "40%",
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
    borderRadius: 5,
  },

  textStyle: {
    fontFamily: "Avenir",
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
    fontWeight: "bold",
    fontSize: 25,
  },

  footer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
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
});