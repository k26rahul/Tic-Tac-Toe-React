import { Link } from 'react-router-dom';
import './HomeScreen.scss';

export default function HomeScreen() {
  return (
    <div className="app-screen vertical-stack">
      <h1>Select a game mode</h1>

      <Link className="btn" to={'/local-single-player'}>
        Local Single Player (vs AI)
      </Link>

      <Link className="btn" to={'/local-two-player'}>
        Local Two Player
      </Link>

      <Link className="btn" to={'/online-multiplayer'}>
        Online Multiplayer
      </Link>
    </div>
  );
}
