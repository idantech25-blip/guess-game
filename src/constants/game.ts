import { GameConfig, Difficulty } from '@/types/game';

export const DIFFICULTY_CONFIG: Record<Difficulty, GameConfig> = {
  easy: { maxNumber: 10, maxGuesses: 5 },
  medium: { maxNumber: 50, maxGuesses: 7 },
  hard: { maxNumber: 100, maxGuesses: 10 }
};
