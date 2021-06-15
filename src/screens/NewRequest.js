import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableOpacity, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from "../components/Screen";

export default function NewRequest({navigation}) {
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
    <TouchableOpacity
        styles={{ color: "black" }}
        onPress={() => navigation.navigate("Requests")}
      >
        <Text>Back to Requests</Text>
      </TouchableOpacity>
    <View style = {{backgroundColor:'#c3bef0'}}>
      <Text style = {styles.header}> New Request </Text>
    </View>
    <View>
        <Text>
            Name
        </Text>
        <TextInput
          placeholder="Name" 
          style={styles.input}
        />
        <Text>
            Address
        </Text>
        <TextInput
          placeholder="Address"
          style={styles.input}
        />
    </View>
    <View style={styles.textContainer}>
        <Button onPress={showDatepicker} title="Delivered by?" style= {styles.textContainer}/>
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
    <Text>
        Shopping List
    </Text>
  </Screen>
  );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffdf1",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontSize:30,
        fontFamily: 'Avenir'
      },
      header: {
          color:'#defcf9',
          fontWeight:'bold',
          fontSize: 40,
          alignSelf: 'center',
          fontFamily: 'Avenir',
          padding: 10
      },
      textContainer: {
          color: "#000000",
          alignSelf: 'flex-start',
          fontFamily: 'Avenir',
          padding: 10,
          fontSize:10
      }
});
