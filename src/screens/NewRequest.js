import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from "../components/Screen";


export default function NewRequest() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "blue",
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
    <Screen styles = {styles.container}>  
    <View >
      <Text > New Request </Text>
      <View>
        <TextInput 
          placeholder="Name" />
        <TextInput
          placeholder="Address"
        />
        <View>
        <Button onPress={showDatepicker} title="Delivered by?" />
        </View>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        )}
        </View>
      </View>
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
      header: {
          color:'#defcf9',
          fontWeight:'bold',
          fontSize: 40,
          alignSelf: 'center',
          fontFamily: 'Avenir',
          padding: 10
      }
});
