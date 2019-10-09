import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [photoData, setPhotoData] = useState();

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=5OJfH4G46HOISrf0mJx8LZs6h3XrtOUJR7g943u2`)
    .then(response => {
      console.log(response);
    })
  })


  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Astronomy Photo of the Day</h1>
      </div>
    </div>
  );
}

export default App;
