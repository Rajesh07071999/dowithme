import React, { useState, useEffect } from "react";
import Navigation from "../../components/navbar/Navbar";
import TicTacToe from "./TicTac";
import WhackAMole from "./Whack-a-Mole";

const BASE_CELL_SIZE = 20;
const BASE_WIDTH = 1000;
const BASE_HEIGHT = 400;

const INITIAL_SNAKE = [
  { x: 2, y: 2 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
];

const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export default function SnakeGame() {
  const [dimensions, setDimensions] = useState({
    width: BASE_WIDTH,
    height: BASE_HEIGHT,
    cellSize: BASE_CELL_SIZE,
  });

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(DIRECTIONS.ArrowDown);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("snakeHighScore")) || 0
  );
  const [speed, setSpeed] = useState(150);
  const [paused, setPaused] = useState(false);

  // Responsive adjustment
  useEffect(() => {
    const resizeGame = () => {
      const windowWidth = window.innerWidth;
      const maxWidth = Math.min(windowWidth - 40, BASE_WIDTH); // Padding
      const scale = maxWidth / BASE_WIDTH;
      const newCellSize = Math.max(10, Math.floor(BASE_CELL_SIZE * scale));
      const newWidth = Math.floor(BASE_WIDTH * scale);
      const newHeight = Math.floor(BASE_HEIGHT * scale);

      setDimensions({
        width: newWidth,
        height: newHeight,
        cellSize: newCellSize,
      });
    };

    resizeGame();
    window.addEventListener("resize", resizeGame);
    return () => window.removeEventListener("resize", resizeGame);
  }, []);

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * (dimensions.width / dimensions.cellSize));
    const y = Math.floor(Math.random() * (dimensions.height / dimensions.cellSize));
    return { x, y };
  };

  useEffect(() => {
    setFood(getRandomPosition());
  }, [dimensions]);

  const moveSnake = () => {
    setSnake((prev) => {
      const head = prev[prev.length - 1];
      const newHead = { x: head.x + direction.x, y: head.y + direction.y };

      if (
        newHead.x < 0 ||
        newHead.x >= dimensions.width / dimensions.cellSize ||
        newHead.y < 0 ||
        newHead.y >= dimensions.height / dimensions.cellSize
      ) {
        setGameOver(true);
        return prev;
      }

      for (let cell of prev) {
        if (cell.x === newHead.x && cell.y === newHead.y) {
          setGameOver(true);
          return prev;
        }
      }

      let newSnake = [...prev, newHead];

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(getRandomPosition());
        setScore((s) => s + 1);
        setSpeed((prevSpeed) => Math.max(50, prevSpeed - 5));
      } else {
        newSnake.shift();
      }

      return newSnake;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        setPaused((p) => !p);
        return;
      }
      const newDir = DIRECTIONS[e.key];
      if (newDir) {
        const opposite =
          direction.x + newDir.x === 0 && direction.y + newDir.y === 0;
        if (!opposite) setDirection(newDir);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver || paused) return;
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [direction, gameOver, speed, paused]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("snakeHighScore", score);
    }
  }, [score, highScore]);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(DIRECTIONS.ArrowDown);
    setFood(getRandomPosition());
    setGameOver(false);
    setScore(0);
    setSpeed(150);
    setPaused(false);
  };

  return (
    <>
      <Navigation />
      <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
        <h1 style={{ color: "#0f0"}}>
          Snake Game 🐍
        </h1>
        <p style={{ fontSize: "16px", color: "#aaa" }}>
                <p>Take a break & enjoy these games inside DoWithMe!</p>

        </p>

        <div
          style={{
            margin: "20px auto",
            height: dimensions.height + 90,
            backgroundColor: "#1a1a1a",
            borderRadius: 12,
            fontFamily: "Arial, sans-serif",
            position: "relative",
          }}
        >
          {/* Scoreboard */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 20px",
              fontSize: 16,
              color: "#eee",
            }}
          >
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
            <div>{paused ? "Paused ⏸️" : "Playing ▶️"}</div>
          </div>

          {/* Game Board */}
          <div
            style={{
              width: dimensions.width,
              height: dimensions.height,
              position: "relative",
              backgroundColor: "#111",
              borderRadius: 8,
              margin: "0 auto",
              border: "2px solid #0f0",
            }}
          >
            {snake.map((segment, idx) => (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  width: dimensions.cellSize,
                  height: dimensions.cellSize,
                  backgroundColor: "#0f0",
                  left: segment.x * dimensions.cellSize,
                  top: segment.y * dimensions.cellSize,
                  borderRadius: 4,
                  boxShadow: "0 0 5px #0f0",
                }}
              />
            ))}

            <div
              style={{
                position: "absolute",
                width: dimensions.cellSize,
                height: dimensions.cellSize,
                backgroundColor: "red",
                left: food.x * dimensions.cellSize,
                top: food.y * dimensions.cellSize,
                borderRadius: "50%",
                boxShadow: "0 0 10px red",
              }}
            />

            {/* Game Over Overlay */}
            {gameOver && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: dimensions.width,
                  height: dimensions.height,
                  backgroundColor: "rgba(0,0,0,0.85)",
                  color: "white",
                  fontSize: 26,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                  zIndex: 10,
                }}
              >
                <p>💀 Game Over!</p>
                <p>Your Score: {score}</p>
                <button
                  onClick={restartGame}
                  style={{
                    padding: "12px 30px",
                    fontSize: 18,
                    borderRadius: 8,
                    cursor: "pointer",
                    border: "none",
                    background: "linear-gradient(to right, #0f0, #0c0)",
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: 15,
                    boxShadow: "0 0 10px #0f0",
                  }}
                >
                  🔄 Restart
                </button>
              </div>
            )}
          </div>

          {/* Controls Info */}
          <div
            style={{
              marginTop: 12,
              fontSize: 24,
              color: "#ccc",
              userSelect: "none",
            }}
          >
            🎮 Use <b>Arrow Keys</b> to move, <b>Spacebar</b> to pause/resume.
          </div>
        </div>
      </div>
      <TicTacToe/>
      <WhackAMole/>
    </>
  );
}
