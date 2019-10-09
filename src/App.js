import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid";


function App() {
 


  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Astronomy Photo of the Day</h1>
        <PhotoGrid />
      </div>
    </div>
  );
}

export default App;
