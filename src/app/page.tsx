'use client';

import { useGame } from '@/hooks/useGame';
import { StartScreen } from '@/components/screens/StartScreen';
import { DifficultyScreen } from '@/components/screens/DifficultyScreen';
import { GameScreen } from '@/components/screens/GameScreen';
import { ResultScreen } from '@/components/screens/ResultScreen';

export default function Home() {
  const {
    gameState,
    difficulty,
    gameStats,
    startNewGame,
    handleGuess,
    resetGame,
    handleKeypadClick,
    handleBackspace,
    goToDifficultySelection
  } = useGame();

  return (
    <div className="min-h-screen">
      {gameState === 'start' && (
        <StartScreen onPlayClick={goToDifficultySelection} />
      )}
      
      {gameState === 'difficulty' && (
        <DifficultyScreen
          onDifficultySelect={startNewGame}
          onCancel={resetGame}
        />
      )}
      
      {gameState === 'playing' && difficulty && (
        <GameScreen
          difficulty={difficulty}
          currentGuess={gameStats.currentGuess}
          guessesLeft={gameStats.guessesLeft}
          message={gameStats.message}
          onNumberClick={handleKeypadClick}
          onBackspace={handleBackspace}
          onSubmit={handleGuess}
          onNewGame={resetGame}
        />
      )}
      
      {(gameState === 'win' || gameState === 'lose') && (
        <ResultScreen
          isWin={gameState === 'win'}
          message={gameStats.message}
          onDifficultySelect={startNewGame}
          onCancel={resetGame}
        />
      )}
    </div>
  );
}
