import React from 'react';
import '../styles/Post.css';
import LikeButton from '../components/LikeButton';

function Post ({ date, title, description, imageSource}) {
  return (
    <section className="post">
      <div className="img-container">
        {/* <img src={imageSource} className="pic-of-day"/> */}
      </div>
      <div className="like-section">
      {/* <LikeButton/> */}
      </div>
      <div className="img-desc">
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Post;