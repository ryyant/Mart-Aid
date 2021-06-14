import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Screen from '../components/Screen'

export default function RequestsScreen({ navigation }) {
    return (
        <Screen>
             <TouchableOpacity styles ={{color: 'black' }} onPress = {() => navigation.navigate(("Login"))}><Text>Back to Login</Text></TouchableOpacity>
            <Text>Requests</Text>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffdf1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})