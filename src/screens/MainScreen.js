import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';


export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Text> This is the main screen! </Text>
        </View>
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