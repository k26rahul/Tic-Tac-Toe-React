import './GameGrid.css';

function GridCell({ cellId, playerSymbol, handleCellClick }) {
  return (
    <button
      className="grid-cell"
      data-cell-id={cellId}
      onClick={() => handleCellClick(cellId)}
    >
      {playerSymbol}
    </button>
  );
}

export default function GameGrid({ board, handleCellClick }) {
  return (
    <section className="game-grid">
      {board.map((playerSymbol, i) => (
        <GridCell
          key={i}
          cellId={i}
          playerSymbol={playerSymbol}
          handleCellClick={handleCellClick}
        />
      ))}
    </section>
  );
}
