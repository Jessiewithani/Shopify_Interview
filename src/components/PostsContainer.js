import React from 'react';
import '../styles/PostsContainer.css';
import Post from '../components/Post';

function PostsContainer ({images}) {
  if (!images) return null
  console.log('images', images)
  return (

    <div className="container">
      {/* POSTS CONTAINER */}
      <Post
        date={images.date}
        title={images.title}
        description={images.explanation}
        imageSource={images.hdurl}

      />
    </div>
  )
}

export default PostsContainer;