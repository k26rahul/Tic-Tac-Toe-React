import { checkWinner, isBoardFull } from './gameUtils';

import {
  checkTerminalState,
  getPossibleMoves,
  applyMoveAndGenerateNewState,
  evaluateState,
} from './minimaxUtils.js';

import Minimax from '../Minimax/Minimax';

export default class T3GameEngine {
  constructor() {
    this.state = {};
    this.resetState();
    this.resetScores();
    this.initializeAI();
  }

  resetState() {
    Object.assign(this.state, {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      winningLine: null,
      isGameOver: false,
    });
  }

  resetScores() {
    Object.assign(this.state, {
      scores: {
        X: 0,
        O: 0,
        tie: 0,
      },
    });
  }

  initializeAI() {
    this.minimax = new Minimax({
      checkTerminalState,
      getPossibleMoves,
      applyMoveAndGenerateNewState,
      evaluateState,
    });
  }

  getAIMove(depth = 10) {
    const isMaximizing = this.state.currentPlayer === 'X';
    const { bestMove } = this.minimax.calculateBestMove(
      this.state.board,
      depth,
      isMaximizing
    );
    console.log({ bestMove });
    return bestMove;
  }

  makeMove(index) {
    if (!this.isValidMove(index)) return false;
    this.state.board[index] = this.state.currentPlayer;
    this.handleMoveOutcome();
    return true;
  }

  handleMoveOutcome() {
    const winnerResult = checkWinner(this.state.board);
    if (winnerResult) {
      this.state.winner = winnerResult.winner;
      this.state.winningLine = winnerResult.winningLine;
      this.state.isGameOver = true;
      this.state.scores[this.state.winner]++;
    } else if (isBoardFull(this.state.board)) {
      this.state.isGameOver = true;
      this.state.scores.tie++;
    } else {
      this.toggleCurrentPlayer();
    }
  }

  isValidMove(index) {
    return !this.state.isGameOver && this.state.board[index] === null;
  }

  toggleCurrentPlayer() {
    this.state.currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
  }
}
