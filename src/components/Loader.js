import React from 'react';
import '../styles/Loader.css';

function Loader() {
  return(
    <div className="loader">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className="loading-title">LOADING...</h1>
    </div>
  )
}

export default Loader;