import { GameCard } from '@/components/ui/GameCard';
import { Button } from '@/components/ui/Button';
import { Difficulty } from '@/types/game';

interface ResultScreenProps {
  isWin: boolean;
  message: string;
  onDifficultySelect: (difficulty: Difficulty) => void;
  onCancel: () => void;
}

export const ResultScreen = ({ isWin, message, onDifficultySelect, onCancel }: ResultScreenProps) => {
  return (
    <GameCard>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {isWin ? 'Congratulations! You won!' : 'Oops! You were close'}
      </h1>
      <p className="text-gray-600 mb-8">{message}</p>
      <div className="space-y-4">
        <Button onClick={() => onDifficultySelect('easy')}>
          Easy
        </Button>
        <Button onClick={() => onDifficultySelect('medium')}>
          Medium
        </Button>
        <Button onClick={() => onDifficultySelect('hard')}>
          Hard
        </Button>
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
      </div>
    </GameCard>
  );
};
