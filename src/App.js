import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PostsContainer from './components/PostsContainer';
import Loader from './components/Loader';

function App() {

  const [spaceImages, setSpaceImages] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=UF4Alv0TEPHcf6ZgVFV2sJ4eE2QqcFghTpAqyQ7M')
      const results = await response.json();
      setSpaceImages(results.photos)
      if (!spaceImages) {
        setLoading(true);
      } else {
        setLoading(false)
      }
    }
    fetchData();
  }, [spaceImages]);

  return (
    <div className="App">
      <Navbar/>
      {!spaceImages ? <Loader loading={loading} images={spaceImages}/> : <PostsContainer images={spaceImages}/>}
    </div>
  );
}

export default App;
