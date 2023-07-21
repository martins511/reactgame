import React from 'react'
import "./snake.css"
const Snake = ({snakeDots}) => {
  return (
    <div>
      {
        snakeDots.map((dot, i) => {
            const style = {
                left : `${dot[1]}%`,
                top : `${dot[0]}%`,
            }
            return <div className='dot' key={i} style={style}></div>
        })
      }
    </div>
  )
}

export default Snake
