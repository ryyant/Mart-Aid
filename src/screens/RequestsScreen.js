import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Screen from "../components/Screen";

export default function RequestsScreen({navigation}) {
  const requests = [
    { title: "hello", id: "0" },
    { title: "help", id: "1" },
    { title: "hey", id: "2" },
  ];

  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item.title}</Text>
      </View>
    );
  }

  return (
    <Screen>
      <TouchableOpacity
        styles={{ color: "black" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Back to Login</Text>
      </TouchableOpacity>
      <Text>
      <FlatList
        data={requests}
        renderItem={renderItem}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
      />
      </Text>
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
});
