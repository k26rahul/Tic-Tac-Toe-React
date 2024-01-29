import { useState, useEffect, createContext } from 'react';
import GameGrid from './components/GameGrid/GameGrid';
import TicTacToeGame from './lib/TicTacToeGame/TicTacToeGame';

function App() {
  const ticTacToeGame = new TicTacToeGame(state => {
    console.log('[App] [ticTacToeGame:onGameStateChange]', state);
  });

  const [gameState, setGameState] = useState(ticTacToeGame.state);
  const GameStateContext = createContext(gameState);

  return (
    <>
      <h1>Tic-Tac-Toe-React</h1>
      <GameGrid
        board={gameState.board}
        handleCellClick={cellId => {
          console.log(cellId);
        }}
      />
    </>
  );
}

export default App;
