import React, { useState, useCallback, useEffect } from "react";
import SnakeSecond from "./SnakeSecond";
import FoodSnk from "./FoodSnk";
const SnakeGame = () => {
  const getRandomGrid = () => {
    let min = 2;
    let max = 97;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };
    let add = getRandomGrid()
  console.log("Game",add);

  const [food, setFood] = useState(getRandomGrid());
  const [direction, setDirection] = useState("RIGHT");
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);
  const [speed] = useState(300);
  const [reset, setReset] = useState(true);
  const [pause, setPause] = useState(true);

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    return head[0] === food[0] && head[1] === food[1];
  };

  const checkIfOutside = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  };

  const checkIfCollapse = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];

    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver();
      }
    });
  };

  const onGameOver = () => {
    setSnakeDots([
      [0, 0],
      [2, 0],
    ]);
    setDirection(null);
    setReset(false);
    setPause(true);
  };

  const moveSnake = useCallback(
    (snakeDots, eaten) => {
      let dots = [...snakeDots];
      let head = dots[dots.length - 1];

      switch (direction) {
        case "RIGHT":
          head = [head[0] + 2, head[1]];
          break;
        case "LEFT":
          head = [head[0] - 2, head[1]];
          break;
        case "DOWN":
          head = [head[0], head[1] + 2];
          break;
        case "UP":
          head = [head[0], head[1] - 2];
          break;
        default:
          break;
      }

      if (direction) {
        dots.push(head);

        if (eaten) {
          setFood(getRandomGrid());
        } else {
          dots.shift();
        }

        setSnakeDots([...dots]);
        console.log("snake",snakeDots);
      }
    },
    [direction]
  );

  useEffect(() => {
    if (pause) return;

    checkIfOutside();
    checkIfCollapse();

    const timer = setTimeout(() => moveSnake(snakeDots, checkIfEat()), speed);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snakeDots, pause, moveSnake]);

  useEffect(() => {
    const onKeyDown = (e) => {
      //e || Window.event
      switch (e.keyCode) {
        case 38:
          !["DOWN", "UP"].includes(direction) && setDirection("UP");
          break;
        case 40:
          !["DOWN", "UP"].includes(direction) && setDirection("DOWN");
          break;
        case 39:
          !["LEFT", "RIGHT"].includes(direction) && setDirection("LEFT");
          break;
        case 37:
          !["LEFT", "RIGHT"].includes(direction) && setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [direction]);

  return (
    <>
      <div className="board">
        <SnakeSecond snakeDots={snakeDots} />
        <FoodSnk food={food} />
      </div>
      <div>
        <button onClick={() => setPause((p) => !p)}>
          {pause ? "Play" : "Pause"}
        </button>
      </div>
    </>
  );
};

export default SnakeGame;




