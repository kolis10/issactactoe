export function checkGame(board, player) {
  if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    return true;
  }
  if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    return true;
  }
  if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true;
  }
  if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true;
  }    
  if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[2][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  return false;
}
