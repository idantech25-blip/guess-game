'use client';

import { useState } from 'react';
import { GameCard } from '@/components/ui/GameCard';
import { Button } from '@/components/ui/Button';
import { HowToPlay } from '@/components/ui/HowToPlay';

interface StartScreenProps {
  onPlayClick: () => void;
}

export const StartScreen = ({ onPlayClick }: StartScreenProps) => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  return (
    <>
      <GameCard>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Guess</h1>
        <button
          onClick={() => setShowHowToPlay(true)}
          className="text-blue-600 hover:text-blue-800 underline mb-8 cursor-pointer"
        >
          How to play
        </button>
        <Button onClick={onPlayClick}>
          Play
        </Button>
      </GameCard>

      <HowToPlay
        isOpen={showHowToPlay}
        onClose={() => setShowHowToPlay(false)}
      />
    </>
  );
};
