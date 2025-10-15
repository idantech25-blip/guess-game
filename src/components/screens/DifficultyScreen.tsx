import { GameCard } from '@/components/ui/GameCard';
import { Button } from '@/components/ui/Button';
import { Difficulty } from '@/types/game';

interface DifficultyScreenProps {
  onDifficultySelect: (difficulty: Difficulty) => void;
  onCancel: () => void;
}

export const DifficultyScreen = ({ onDifficultySelect, onCancel }: DifficultyScreenProps) => {
  return (
    <GameCard>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Guess</h1>
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
