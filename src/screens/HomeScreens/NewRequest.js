import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableOpacity, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from '../../components/Screen';

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

  return (
    <Screen styles = {styles.container}>  
    <TouchableOpacity
        styles={{ color: "black" }}
        onPress={() => navigation.navigate("Requests")}>
        <Text>Back to Requests</Text>
      </TouchableOpacity>
    <View style = {{backgroundColor:'#c3bef0'}}>
      <Text style = {styles.header}> New Request </Text>
    </View>
    <View>
        <Text style={styles.title}>
            Name
        </Text>
        <TextInput
          placeholder="Name" 
          style={styles.input}
        />
        <Text style={styles.title}>
            Address
        </Text>
        <TextInput 
          placeholder="Address"
          style={styles.input}
        />
    </View>
    <Text style={styles.title}>
            Delivered By?
        </Text>
    <View style={styles.textContainer}>
        <Button style={styles.button}
        onPress={showDatepicker} 
        title="Select Date"

         />
    </View>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          textColor="black"
        />
        )}
    <Text style={styles.title}>
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
          color:'#150E56',
          fontWeight:'bold',
          fontSize: 35,
          alignSelf: 'center',
          fontFamily: 'Avenir',
          padding: 10
      },
      textContainer: {
          color: "#000000",
          alignSelf: 'flex-start',
          fontFamily: 'Avenir',
          padding: 10,
          paddingBottom: 5,
          paddingTop: 5,
          fontSize:15
      },
      title: {
          color: '#150E56',
          fontWeight: 'bold',
          fontSize: 18,
          padding:10,
          paddingBottom: 5,
          paddingTop: 20,
          fontFamily: 'Avenir',
      },
      input: {
        fontSize: 15,
        fontFamily: 'Avenir',
        paddingLeft: 10,

      },
      button: {
          color: 'black',
          paddingLeft: 10,
      }
});
