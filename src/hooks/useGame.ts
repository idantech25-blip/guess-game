'use client';

import { useState } from 'react';
import { GameState, Difficulty, GameStats } from '@/types/game';
import { DIFFICULTY_CONFIG } from '@/constants/game';

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [magicNumber, setMagicNumber] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<number[]>([]);
  const [message, setMessage] = useState<string>('');
  const [guessesLeft, setGuessesLeft] = useState<number>(0);

  const startNewGame = (selectedDifficulty: Difficulty) => {
    const config = DIFFICULTY_CONFIG[selectedDifficulty];
    const newMagicNumber = Math.floor(Math.random() * config.maxNumber) + 1;
    
    setDifficulty(selectedDifficulty);
    setMagicNumber(newMagicNumber);
    setCurrentGuess('');
    setGuesses([]);
    setMessage('');
    setGuessesLeft(config.maxGuesses);
    setGameState('playing');
  };

  const handleGuess = () => {
    const guess = parseInt(currentGuess);
    if (isNaN(guess) || guess < 1 || guess > DIFFICULTY_CONFIG[difficulty!].maxNumber) {
      setMessage('Please enter a valid number!');
      return;
    }

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (guess === magicNumber) {
      setMessage(`Congratulations! You won on your ${newGuesses.length}${newGuesses.length === 1 ? 'st' : newGuesses.length === 2 ? 'nd' : newGuesses.length === 3 ? 'rd' : 'th'} guess!`);
      setGameState('win');
    } else {
      const remaining = guessesLeft - 1;
      setGuessesLeft(remaining);
      
      if (remaining === 0) {
        setMessage(`Game Over! The magic number was ${magicNumber}.`);
        setGameState('lose');
      } else {
        const difference = Math.abs(guess - magicNumber);
        if (difference <= 5) {
          setMessage('Oops! You were close. Try again!');
        } else if (guess < magicNumber) {
          setMessage('Too low! Try a higher number.');
        } else {
          setMessage('Too high! Try a lower number.');
        }
      }
    }
  };

  const resetGame = () => {
    setGameState('start');
    setDifficulty(null);
    setMagicNumber(0);
    setCurrentGuess('');
    setGuesses([]);
    setMessage('');
    setGuessesLeft(0);
  };

  const handleKeypadClick = (digit: string) => {
    const maxDigits = difficulty === 'hard' ? 3 : 2;
    if (currentGuess.length < maxDigits) {
      setCurrentGuess(currentGuess + digit);
    }
  };

  const handleBackspace = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const goToDifficultySelection = () => {
    setGameState('difficulty');
  };

  const gameStats: GameStats = {
    guesses,
    guessesLeft,
    currentGuess,
    message
  };

  return {
    gameState,
    difficulty,
    magicNumber,
    gameStats,
    startNewGame,
    handleGuess,
    resetGame,
    handleKeypadClick,
    handleBackspace,
    goToDifficultySelection,
    setGameState
  };
};
