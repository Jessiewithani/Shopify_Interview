import React, { useState } from 'react';
import '../styles/PostsContainer.css';
import Post from '../components/Post';

function PostsContainer ({images}) {
  // use state to store all the postsz; setPosts([post, post])
  // const [ likedPosts, setLikedPosts] = useState([]);
  const likedPosts = localStorage.getItem('likes', []) // an array of likes from local storage

  if (!images) return null
  // console.log('images', images)


  const roverImages = images.map(image => {
    return(
      <Post
        date={image.earth_date}
        cameraTitle={image.camera.full_name}
        roverTitle={image.rover.name}
        imageSource={image.img_src}
        key={image.id}
        id={image.id}
        likedPost={likedPosts && likedPosts.includes(image.id)}
      />

    )
  })
  return (
    <div className="container">
      {roverImages}
    </div>
  )
}

export default PostsContainer;