export type GameState = 'start' | 'difficulty' | 'playing' | 'win' | 'lose';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
  maxNumber: number;
  maxGuesses: number;
}

export interface GameStats {
  guesses: number[];
  guessesLeft: number;
  currentGuess: string;
  message: string;
}
