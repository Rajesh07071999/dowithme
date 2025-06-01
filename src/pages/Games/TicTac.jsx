import React, { useState } from "react";
import "./Game.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="tictactoe-container">
  <h1 className="tictactoe-heading">Tic-Tac-Toe 🎯</h1>
  <div className="tictactoe-board">
    {board.map((cell, index) => (
      <div
        key={index}
        className="tictactoe-cell"
        onClick={() => handleClick(index)}
      >
        {cell}
      </div>
    ))}
  </div>
  <div className="tictactoe-status">
    {winner
      ? `🎉 Winner: ${winner}`
      : board.every(Boolean)
      ? "🤝 It's a Draw!"
      : `Next: ${xIsNext ? "X" : "O"}`}
  </div>
  <button className="tictactoe-button" onClick={resetGame}>
    🔄 Restart
  </button>
</div>

  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial",
    color: "white",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#0f0",
    textShadow: "0 0 10px #0f0",
  },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "300px",
    margin: "auto",
    gap: "5px",
  },
  cell: {
    width: "100px",
    height: "100px",
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    cursor: "pointer",
    borderRadius: "8px",
    boxShadow: "0 0 10px #0f0",
  },
  status: {
    fontSize: "18px",
    marginTop: "20px",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "6px",
    backgroundColor: "#0f0",
    color: "#000",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 10px #0f0",
  },
};

// Helper function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
