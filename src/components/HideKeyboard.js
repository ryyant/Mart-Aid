import React from 'react';
import { Keyboard, StyleSheet, View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

export default ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );