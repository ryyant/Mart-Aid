import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LoginButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.lbutton} onPress={ onPress }>
            <Image source={require('../../assets/login-button.png')}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    lbutton: {
        transform: [{scale: 0.5}]
    }
})