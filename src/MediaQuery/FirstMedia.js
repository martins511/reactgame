import React from 'react'
import "./media.css"
const FirstMedia = () => {
  return (
    <div className='container'>
      <div className="left">
        <ul>
            <li>Home</li>
            <li>Feedback</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="right">
        <input type="text"  />
        <button className="enter">search</button>
      </div>
    </div>
  )
}

export default FirstMedia
