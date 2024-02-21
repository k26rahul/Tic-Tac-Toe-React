import './GameContainer.scss';

import { useState, useEffect } from 'react';
import { T3GameEngineStateProvider } from './T3GameEngineContext';

import GameGrid from './GameGrid';
import GameScore from './GameScore';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';
import T3GameEngine from '../../lib/T3GameEngine/T3GameEngine';

const t3GameEngine = new T3GameEngine();
window.t3GameEngine = t3GameEngine;

export default function GameContainer() {
  const [t3GameEngineState, setT3GameEngineState] = useState(
    t3GameEngine.state
  );

  const updateGameState = () => {
    setT3GameEngineState({ ...t3GameEngine.state });
  };

  const handleCellClick = index => {
    if (t3GameEngine.state.isGameOver) {
      return handleRestartGame();
    }
    t3GameEngine.makeMove(index);
    t3GameEngine.makeMove(t3GameEngine.getAIMove());
    updateGameState();
  };

  const handleRestartGame = () => {
    t3GameEngine.resetState();
    updateGameState();
  };

  useEffect(() => {
    console.log('[GameContainer useEffect]');
    // t3GameEngine.makeMove(t3GameEngine.getAIMove());
  }, []);

  console.log('[GameContainer]');

  return (
    <div className="game-container vertical-stack">
      <T3GameEngineStateProvider t3GameEngineState={t3GameEngineState}>
        <GameScore />
        <GameStatus />
        <GameGrid handleCellClick={handleCellClick} />
        <RestartButton onClick={handleRestartGame} />
      </T3GameEngineStateProvider>
    </div>
  );
}
