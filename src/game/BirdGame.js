import React from 'react'
import { useEffect, useState } from "react";
import { Bird, Div, GameBox, Obstacle } from "./StyledComponent";
const BIRD_SIZE = 20;
const GAME_HEIGHT = 500;
const GAME_WIDTH = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 200;
const BirdGame = () => {
    const [birdPosition, setBirdPosition] = useState(250);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const [obstacleHeight, setObstacleHeight] = useState(100);
    const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
    const [score, setScore] = useState(0);
  
    const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight;
  
    useEffect(() => {
      let timeId;
      if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
        timeId = setInterval(() => {
          setBirdPosition((birdPosition) => birdPosition + GRAVITY);
        }, 24);
      }
      return () => {
        clearInterval(timeId);
      };
    }, [birdPosition, gameHasStarted]);
  
    useEffect(() => {
      let obstacleId;
      if (gameHasStarted && obstacleLeft >= 0) {
        obstacleId = setInterval(() => {
          setObstacleLeft((obstacleLeft) => obstacleLeft - 3);
        }, 24);
  
        return () => {
          clearInterval(obstacleId);
        };
      } else {
        setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
        setObstacleHeight(
          Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
        );
        setScore((score)=>score +1)
      }
    }, [gameHasStarted, obstacleLeft]);
  
    useEffect(() => {
      const hasCollidedWithTopObstacle =
        birdPosition >= 0 && birdPosition < obstacleHeight;
      const hasCollidedWithBottomObstacle =
        birdPosition <= 500 && birdPosition >= 500 - bottomObstacleHeight;
      if (
        obstacleLeft >= 0 &&
        obstacleLeft <= OBSTACLE_WIDTH &&
        (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
      ) {
        setGameHasStarted(false);
      }
    },[birdPosition,obstacleHeight,bottomObstacleHeight,obstacleLeft]);
  
    const handleClick = () => {
      let newBirdPosition = birdPosition - JUMP_HEIGHT;
      if (!gameHasStarted) {
        setGameHasStarted(true);
      } else if (newBirdPosition < 0) {
        setBirdPosition(0);
      } else {
        setBirdPosition(newBirdPosition);
      }
    };
  return (
    <div>
      <Div onClick={handleClick}>
        <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
          <Obstacle
            top={0}
            width={OBSTACLE_WIDTH}
            height={obstacleHeight}
            left={obstacleLeft}
          />
          <Obstacle
            top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
            width={OBSTACLE_WIDTH}
            height={bottomObstacleHeight}
            left={obstacleLeft}
          />
          <Bird size={BIRD_SIZE} top={birdPosition} />
        </GameBox>
        <span>{score}</span>
      </Div>
    </div>
  )
}

export default BirdGame
