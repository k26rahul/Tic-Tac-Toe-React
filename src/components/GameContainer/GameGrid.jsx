import React from 'react';
import { useT3GameEngineState } from './T3GameEngineContext';

function GridCell({ value, onClick, isWinnerCell }) {
  return (
    <button
      className={`grid-cell ${isWinnerCell ? 'winner' : ''}`}
      onClick={onClick}
    >
      {value === null ? '' : value === 'X' ? '✖️' : '⭕'}
    </button>
  );
}

export default function GameGrid({ handleCellClick }) {
  const { t3GameEngineState } = useT3GameEngineState();

  const renderGridCells = () => {
    const { board, winner, winningLine } = t3GameEngineState;
    return board.map((cellValue, index) => {
      const isWinnerCell = winner && winningLine.includes(index);
      return (
        <GridCell
          key={index}
          value={cellValue}
          onClick={() => handleCellClick(index)}
          isWinnerCell={isWinnerCell}
        />
      );
    });
  };

  return <section className="game-grid">{renderGridCells()}</section>;
}
