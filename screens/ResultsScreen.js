import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GameContext } from '../context/GameContext';

const ResultsScreen = ({ navigation }) => {
  const { playerScore, computerScore, resetScores } = useContext(GameContext);

 
  const resultMessage = playerScore > computerScore ? 'You Win!' : playerScore < computerScore ? 'You Lose!' : 'It\'s a Draw!';

  
  const handleRestart = () => {
    resetScores(); 
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Final Scores</Text>

      
      <Text style={styles.scoreText}>Your Score: {playerScore}</Text>
      <Text style={styles.scoreText}>Computer Score: {computerScore}</Text>

     
      <Text style={styles.resultText}>{resultMessage}</Text>

    
      <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    bottom: 200,
  },
  scoreText: {
    fontSize: 35,
    marginBottom: 10,
    color: '#000', 
    bottom: 150,
  },
  resultText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4B0082', 
    bottom:60,
  },
  button: {
    backgroundColor: '#4B0082', 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%', 
    alignItems: 'center'
    

  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsScreen;