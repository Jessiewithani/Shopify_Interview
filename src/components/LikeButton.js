import React, { useState } from 'react';
import '../styles/LikeButton.css';
import rocket from '../images/rocket.svg'

function LikeButton () {

  const [toggleLike, setToggleLike] = useState(true)

  const handleLikeClick = () => {
    setToggleLike(!toggleLike)
  }

  return (
    <div>
      <button className="like-btn" onClick={handleLikeClick}>{toggleLike ? "LIKE" : "UNLIKE"}</button>
      {/* <img src={rocket} className="like-icon" alt="rocket" /> */}
    </div>
  )
}

export default LikeButton;