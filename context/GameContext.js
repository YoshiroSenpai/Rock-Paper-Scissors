import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const resetScores = () => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <GameContext.Provider value={{ playerScore, setPlayerScore, computerScore, setComputerScore, resetScores }}>
      {children}
    </GameContext.Provider>
  );
};