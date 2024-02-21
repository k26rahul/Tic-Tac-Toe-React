import { isBoardFull, checkWinner } from './gameUtils';

export function checkTerminalState({ state: board }) {
  return isBoardFull(board) || !!checkWinner(board);
}

export function getPossibleMoves({ state: board }) {
  const possibleMoves = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      possibleMoves.push(i);
    }
  }
  return possibleMoves;
}

export function applyMoveAndGenerateNewState({
  move: index,
  state: board,
  isMaximizing,
}) {
  const newBoard = [...board];
  newBoard[index] = isMaximizing ? 'X' : 'O';
  return newBoard;
}

export function evaluateState({ state: board, isMaximizing }) {
  const winnerResult = checkWinner(board);
  if (winnerResult) {
    return winnerResult.winner === 'X' ? 2 : -2;
  } else if (isBoardFull(board)) {
    return isMaximizing ? 1 : -1; // Draw
  } else {
    return 0; // Incomplete game
  }
}
