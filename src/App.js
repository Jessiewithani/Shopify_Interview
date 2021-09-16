import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PostsContainer from './components/PostsContainer';

function App() {

  
  const [spaceImages, setSpaceImages] = useState(null)
  

  useEffect(async () => {
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=UF4Alv0TEPHcf6ZgVFV2sJ4eE2QqcFghTpAqyQ7M')
    const results = await response.json();
    setSpaceImages(results.photos)
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <PostsContainer images={spaceImages}/>
    </div>
  );
}

export default App;
