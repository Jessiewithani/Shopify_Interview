import React, { useState } from 'react';
import '../styles/LikeButton.css';
import rocket from '../images/rocket.svg'

function LikeButton ({ id, likedPost}) {

  const [liked, setLiked] = useState(likedPost || false)

  const handleLikeClick = () => {

    setLiked(!liked)
    
    if (localStorage.getItem('likes')) {
      const arrayOfLikes = Array.from(JSON.parse(localStorage.getItem('likes')))
      localStorage.setItem('likes', JSON.stringify([...arrayOfLikes, id]))
    } else {
      localStorage.setItem('likes', JSON.stringify([id]))
    }
  }
  
  return (
    <div className="btn-section">
      <div className="icon-cont" >
        <img src={rocket} className={`like-icon ${liked ? 'liked' : null }`} alt="like-rocket" onClick={handleLikeClick}/>
      </div>
    </div>
  )
}

export default LikeButton;