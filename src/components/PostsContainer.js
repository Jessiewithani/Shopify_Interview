import React from 'react';
import '../styles/PostsContainer.css';
import Post from '../components/Post';

function PostsContainer ({images}) {
  if (!images) return null
  // console.log('images', images)

  // const [toggleLike, setToggleLike] = useState(false)
  const roverImages = images.map(image => {
    console.log('I', image)
    return(
      <Post
        date={image.earth_date}
        cameraTitle={image.camera.full_name}
        roverTitle={image.rover.name}
        // description={images.explanation}
        imageSource={image.img_src}
        key={image.id}
        id={image.id}
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