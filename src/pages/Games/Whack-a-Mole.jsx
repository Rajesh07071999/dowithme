import React, { useState, useEffect, useRef } from "react";
import "./Game.css";

const NUM_HOLES = 9;
const GAME_DURATION = 30; // seconds

const WhackAMole = () => {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const moleTimer = useRef(null);
  const countdownTimer = useRef(null);

  const startGame = () => {
    setIsRunning(true);
    setScore(0);
    setTimeLeft(GAME_DURATION);

    moleTimer.current = setInterval(() => {
      const index = Math.floor(Math.random() * NUM_HOLES);
      setMoleIndex(index);
    }, 800);

    countdownTimer.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopGame = () => {
    clearInterval(moleTimer.current);
    clearInterval(countdownTimer.current);
    setIsRunning(false);
    setMoleIndex(null);
  };

  const hitMole = (index) => {
    if (index === moleIndex) {
      setScore((s) => s + 1);
      setMoleIndex(null); // Hide mole after hit
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(moleTimer.current);
      clearInterval(countdownTimer.current);
    };
  }, []);

  return (
    <div className="whack-container">
      <h1>🐹 Whack-a-Mole</h1>
      <div className="stats">
        <span>⏱ Time: {timeLeft}s</span>
        <span>🏆 Score: {score}</span>
      </div>

      <div className="grid">
        {[...Array(NUM_HOLES)].map((_, i) => (
          <div
            key={i}
            className={`hole ${i === moleIndex ? "mole" : ""}`}
            onClick={() => hitMole(i)}
          ></div>
        ))}
      </div>

      <button className="start-btn" onClick={isRunning ? stopGame : startGame}>
        {isRunning ? "Stop" : "Start"} Game
      </button>
    </div>
  );
};

export default WhackAMole;
