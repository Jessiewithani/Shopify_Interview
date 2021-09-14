import React, { useState } from 'react';
import '../styles/LikeButton.css';
import rocket from '../images/rocket.svg'

function LikeButton () {

  const rocketIcon = document.getElementsByClassName("like-icon")[0]

  const [toggleLike, setToggleLike] = useState(true)

  const handleLikeClick = () => {
    setToggleLike(!toggleLike)

  }

  

  return (
    <div className="btn-section">
      {console.log('rock', rocketIcon)}
      <div className="icon-cont" >
        <img src={rocket} className={`like-icon ${!toggleLike ? 'liked' : null}`} alt="rocket" onClick={handleLikeClick}/>
      {/* <button className="like-btn" onClick={handleLikeClick}>{toggleLike ? "LIKE" : "UNLIKE"}</button> */}
      </div>
    </div>
  )
}

export default LikeButton;