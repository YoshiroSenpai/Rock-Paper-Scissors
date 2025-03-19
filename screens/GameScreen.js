import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ChoiceButton from '../components/ChoiceButton';
import ResultDisplay from '../components/ResultDisplay';
import { GameContext } from '../context/GameContext';

const choices = ['Rock', 'Paper', 'Scissors'];

const GameScreen = ({ navigation }) => {
  const [playerChoice, setPlayerChoice] = useState(''); 
  const [computerChoice, setComputerChoice] = useState(''); 
  const [result, setResult] = useState('');
  const [moveCount, setMoveCount] = useState(0); 
  const { playerScore, setPlayerScore, computerScore, setComputerScore } = useContext(GameContext);

  const determineWinner = (player, computer) => {
    if (player === computer) return 'Draw!';
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      setPlayerScore((prevScore) => prevScore + 1);
      return 'You Win!';
    }
    setComputerScore((prevScore) => prevScore + 1);
    return 'You Lose!';
  };

  const handleChoice = (choice) => {
    if (moveCount >= 10) {
      Alert.alert('Game Over', 'You have reached the maximum number of moves (10).');
      return; 
    }

    const computer = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(determineWinner(choice, computer));
    setMoveCount((prevCount) => prevCount + 1); 
  };

  useEffect(() => {
    if (moveCount >= 10) {
      
      navigation.navigate('Results');
    }
  }, [moveCount]);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setPlayerChoice('');
        setComputerChoice('');
        setResult('');
      }, 10000); 

      return () => clearTimeout(timer); 
    }
  }, [result]);

  return (
    <View style={styles.container}>
   
      <Text style={styles.moveCountText}>Moves: {moveCount}/10</Text>

     
      <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} result={result} />

      
      <Text style={styles.title}>Choose Your Move</Text>

     
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <ChoiceButton key={choice} choice={choice} onPress={handleChoice} />
        ))}
      </View>

     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Results')}>
        <Text style={styles.buttonText}>View Results</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  moveCountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B0082', 
    marginBottom: 20,
    top:30,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#4B0082',
    top: 40,
  },
  choicesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#4B0082',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
    bottom:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameScreen;