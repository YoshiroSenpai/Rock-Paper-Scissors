import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDisplay = ({ playerChoice, computerChoice, result }) => {

  const playerImages = {
    Rock: require('../assets/prock.png'), 
    Paper: require('../assets/ppaper.png'), 
    Scissors: require('../assets/pscissors.png'), 
  };

  const computerImages = {
    Rock: require('../assets/crock.png'),
    Paper: require('../assets/cpaper.png'), 
    Scissors: require('../assets/cscissors.png'), 
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Computer chose: {computerChoice || '...'}</Text>
      {computerChoice && <Image source={computerImages[computerChoice]} style={styles.image} />}

      {result && <Text style={styles.resultText}>{result}</Text>}

      <Text style={styles.text}>You chose: {playerChoice || '...'}</Text>
      {playerChoice && <Image source={playerImages[playerChoice]} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50, 
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#000',
  },
  resultText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
  },
});

export default ResultDisplay;