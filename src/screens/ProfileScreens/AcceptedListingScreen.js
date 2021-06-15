import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Header,
} from "react-native";
import Screen from "../../components/Screen";

export default function ({ navigation }) {

  return (
    <Screen styles = {styles.container}>
      <Text>Accepted Listings</Text>
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
