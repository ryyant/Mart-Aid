import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SignUpButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.subutton} onPress={ onPress }>
            <Image source={require('../../assets/sign-up-button.png')}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subutton: {
        transform: [{scale: 0.5}]
    }
})