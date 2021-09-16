import React, { useState } from 'react';
import '../styles/LikeButton.css';
import rocket from '../images/rocket.svg'

function LikeButton ({ id, likedPost}) {

  const [liked, setLiked] = useState(likedPost || false)

  console.log('likedPost', likedPost)

  const handleLikeClick = () => {
    setLiked(!liked)
    
    if (localStorage.getItem('likes')) {
      const arrayOfLikes = Array.from(JSON.parse(localStorage.getItem('likes')))
      console.log('HI', arrayOfLikes)
      localStorage.setItem('likes', JSON.stringify([...arrayOfLikes, id]))
    } else {
      console.log('heree')
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


// take the data from the api, make it into an object that can store 
// "liked" = true | false state
// use liked in replacement of `toggleLike` to determine class
// take the posts that you stored, and put it in local storage
// if local storage has posts, use that, via (useEffect otherwise hit api)