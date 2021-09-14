import React from 'react';
import '../styles/LikeButton.css';
import rocket from '../images/rocket.svg'

function LikeButton () {
  return (
    <div>
      <button className="like-btn">LIKE</button>
      {/* <img src={rocket} className="like-icon" alt="rocket" /> */}
    </div>
  )
}

export default LikeButton;