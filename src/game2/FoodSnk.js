import React from 'react'


const FoodSnk = ({food}) => {

    const style = {
        left: `${food[0]}%`,
        top: `${food[1]}%`,
      };
  return (
    <div className="food" style={style}></div>
  )
}

export default FoodSnk
