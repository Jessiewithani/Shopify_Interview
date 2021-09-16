import React from 'react';
import '../styles/Post.css';
import LikeButton from '../components/LikeButton';

function Post ({ id, date, cameraTitle, roverTitle, imageSource, likedPost}) {


  return (
    <section className="post">
      <div className="img-container">
        <img src={imageSource} className="pic-of-day"/>
      </div>
      <div className="like-section">
      <LikeButton id={id} likedPost={likedPost}/>
      </div>
      <div className="img-desc">
        <h3>{`${roverTitle} Rover - ${cameraTitle}`}</h3>
        <span>{date}</span>
        {/* <p>{description}</p> */}
      </div>
    </section>
  )
}

export default Post;