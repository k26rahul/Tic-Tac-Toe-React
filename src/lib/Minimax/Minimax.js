export default class Minimax {
  constructor({
    checkTerminalState,
    getPossibleMoves,
    applyMoveAndGenerateNewState,
    evaluateState,
  }) {
    this.checkTerminalState = checkTerminalState;
    this.getPossibleMoves = getPossibleMoves;
    this.applyMoveAndGenerateNewState = applyMoveAndGenerateNewState;
    this.evaluateState = evaluateState;
  }

  calculateBestMove(state, depth, isMaximizing) {
    if (
      depth === 0 ||
      this.checkTerminalState({ state, depth, isMaximizing })
    ) {
      return {
        bestMove: null,
        bestScore: this.evaluateState({ state, depth, isMaximizing }),
      };
    }

    const possibleMoves = this.getPossibleMoves({ state, depth, isMaximizing });

    let bestScore = isMaximizing ? -Infinity : Infinity;
    let bestMove = null;

    for (const move of possibleMoves) {
      const newState = this.applyMoveAndGenerateNewState({
        move,
        state,
        depth,
        isMaximizing,
      });

      const { bestScore: childScore } = this.calculateBestMove(
        newState,
        depth - 1,
        !isMaximizing
      );

      if (
        (isMaximizing && childScore > bestScore) ||
        (!isMaximizing && childScore < bestScore)
      ) {
        bestScore = childScore;
        bestMove = move;
      }
    }

    return { bestMove, bestScore };
  }
}
