import { GameCard } from '@/components/ui/GameCard';
import { Button } from '@/components/ui/Button';
import { NumberInput } from '@/components/ui/NumberInput';
import { Keypad } from '@/components/ui/Keypad';
import { Difficulty } from '@/types/game';
import { DIFFICULTY_CONFIG } from '@/constants/game';

interface GameScreenProps {
  difficulty: Difficulty;
  currentGuess: string;
  guessesLeft: number;
  message: string;
  onNumberClick: (digit: string) => void;
  onBackspace: () => void;
  onSubmit: () => void;
  onNewGame: () => void;
}

export const GameScreen = ({
  difficulty,
  currentGuess,
  guessesLeft,
  message,
  onNumberClick,
  onBackspace,
  onSubmit,
  onNewGame
}: GameScreenProps) => {
  const maxDigits = difficulty === 'hard' ? 3 : 2;

  return (
    <GameCard>
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        Guess the Magic Number from 1 to {DIFFICULTY_CONFIG[difficulty].maxNumber}
      </h1>
      {guessesLeft > 0 && (
        <p className="text-gray-600 mb-6">Guesses left: {guessesLeft}</p>
      )}
      
      {message && (
        <div className="mb-6 p-4 bg-blue-50 rounded-xl">
          <p className="text-blue-800 font-medium">{message}</p>
        </div>
      )}

      <div className="mb-6">
        <NumberInput currentGuess={currentGuess} maxDigits={maxDigits} />
      </div>

      <Keypad
        onNumberClick={onNumberClick}
        onBackspace={onBackspace}
        onSubmit={onSubmit}
      />

      <Button onClick={onSubmit} className="mb-4">
        Submit
      </Button>

      <Button onClick={onNewGame} variant="secondary">
        New Game
      </Button>
    </GameCard>
  );
};
