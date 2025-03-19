import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChoiceButton = ({ choice, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(choice)}>
    <Text style={styles.text}>{choice}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#000', 
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    marginHorizontal: 15, 
    width: 150, 
    top: 30,

  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ChoiceButton;