import React from 'react'
import "../game/snake.css"
const SnakeSecond = ({ snakeDots }) => {
    return (
      <div>
        {snakeDots.map((dot, i) => {
          const style = {
            left: `${dot[0]}%`,
            top: `${dot[1]}%`,
          };
          return <div className="dot" key={i} style={style}></div>;
        })}
      </div>
    );
  };
  

export default SnakeSecond


