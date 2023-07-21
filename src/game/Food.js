import React from 'react'

const Food = ({dot}) => {
    const style = {
        left : `${dot[1]}%`,
        top : `${dot[0]}%`,
    }
  return (
    <div className='food' style={style}></div>
  )
}

export default Food
