import React from 'react';

function RestartButton({ onClick }) {
  return (
    <button className="restart-btn" onClick={onClick}>
      Restart Game
    </button>
  );
}

export default RestartButton;
