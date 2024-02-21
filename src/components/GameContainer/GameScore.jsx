import { useT3GameEngineState } from './T3GameEngineContext';

export default function GameScore() {
  const { t3GameEngineState } = useT3GameEngineState();

  return (
    <section className="game-score horizontal-stack">
      <div className="score-cell">
        <span className="score-value">{t3GameEngineState.scores.X}</span>
        <span className="score-label">Win ✖️</span>
      </div>
      <div className="score-cell">
        <span className="score-value">{t3GameEngineState.scores.tie}</span>
        <span className="score-label">Tie 🍃</span>
      </div>
      <div className="score-cell">
        <span className="score-value">{t3GameEngineState.scores.O}</span>
        <span className="score-label">Win ⭕</span>
      </div>
    </section>
  );
}
