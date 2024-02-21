import { useT3GameEngineState } from './T3GameEngineContext';

function WinnerMessage({ winner }) {
  return (
    <p className="winner">
      <span className={`XO ${winner}`}>{winner === 'X' ? '✖️' : '⭕'}</span>
      Wins!
    </p>
  );
}

function TieMessage() {
  return (
    <p className="tie">
      <strike>✖️⭕</strike> It's a tie!
    </p>
  );
}

function TurnMessage({ currentPlayer }) {
  return (
    <p className="turn">
      <span className={`XO ${currentPlayer}`}>
        {currentPlayer === 'X' ? '✖️' : '⭕'}
      </span>
      Turn
    </p>
  );
}

export default function GameStatus() {
  const { t3GameEngineState } = useT3GameEngineState();

  return (
    <section className="game-status">
      {t3GameEngineState.isGameOver ? (
        t3GameEngineState.winner ? (
          <WinnerMessage winner={t3GameEngineState.winner} />
        ) : (
          <TieMessage />
        )
      ) : (
        <TurnMessage currentPlayer={t3GameEngineState.currentPlayer} />
      )}
    </section>
  );
}
