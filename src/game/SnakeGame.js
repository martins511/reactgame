import React from "react";
import { useState, useCallback, useEffect } from "react";
import Food from "./Food";
import Snake from "./Snake";
const SnakeGame = () => {

  const getRandomGrid = () => {
    const min = 2;
    const max = 97;
    const x = Math.floor(Math.random() * ((max - min) / 2 + 1) + min / 2) * 2;
    const y = Math.floor(Math.random() * ((max - min) / 2 + 1) + min / 2) * 2;
    return [x, y];
  };
  const [food, setFood] = useState(getRandomGrid);
  const [direction, setDirection] = useState("RIGHT");
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);
  const [speed] = useState(200);
  const [reset, setReset] = useState(true);
  const [pause, setPause] = useState(true);

  const checkIfeat = ()=>{
    let head = snakeDots[snakeDots.length - 1];
    return head[0] === food[0] && head[1] === food[1]
  }

  const checkIfOutside = () =>{
        let head = snakeDots[snakeDots.length - 1]
        if(head[0] >=100 || head[1] >=100 || head[0] <0 || head[1] < 0) {
            onGameOver()
        }
  }

  const checkIfCollapse = () =>{
        let snake = [ ...snakeDots];
        let head = snake[snake.length - 1];

        snake.pop();
        snake.forEach((dot) =>{
          if(head[0] === dot[0] && head[1] === dot[1]){
            onGameOver()
          }
        })
  }

  const onGameOver = () =>{
    setSnakeDots([
      [0,0],
      [2,0]
    ])
    setDirection(null);
    setReset(false);
    setPause(true)
  }
  useEffect(()=>{
    if(pause)return;

    checkIfOutside()

    checkIfCollapse()

    setTimeout(()=> moveSnake(snakeDots , checkIfeat()), speed)
  },[snakeDots, pause])

  const moveSnake = useCallback((snakeDots ,eaten)=>{
    let dots = [...snakeDots];
    let head = dots[dots.length -1]

    switch(direction){
        case "RIGHT":
            head = [head[0] + 2, head[1]]
            break
         case "LEFT":
            head = [head[0] -2, head[1]] 
            break
         case "DOWN" :
            head = [head[0], head[1] +2]
            break
         case "UP" : 
            head = [head[0], head[1] -2]
            break

            default :
            break
    }
    if(direction){
        dots.push(head)

        eaten ? setFood(getRandomGrid()) : dots.shift()

        setSnakeDots([...dots])
    }
  }, [direction])

  useEffect(()=>{
      const onKeyDown = (e) =>{
        //e || Window.event
        switch(e.keyCode){
          case 38 :
            console.log('direction', direction)
            !['DOWN', 'UP'].includes(direction) && setDirection('UP')
            break

            case 40:
              !['DOWN', 'UP'].includes(direction) && setDirection('DOWN')
            break

            case 39:
            !['LEFT', 'RIGHT'].includes(direction) && setDirection('LEFT')
            break
            
            case 37:
            !['LEFT', 'RIGHT'].includes(direction) && setDirection('RIGHT')
            break

            default :
            break
        }
      }

      document.addEventListener('keydown', onKeyDown)
        return () =>{
            document.removeEventListener('keydown', onKeyDown)
        }
  },[direction ,setDirection])

  return ( 
    <>
    <div className="board">
            <Snake snakeDots={snakeDots}/>
            <Food dot={food}/>
    </div>
    <div>
      <button onClick={()=>setPause(p=>!p)}>{ pause ? "Play":"Pause" }</button>
    </div>
    </>
)};

export default SnakeGame;
