import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid";
import styled from "styled-components";


const Container = styled.div`
  border: 1px solid black;
  padding: 1%;
  background-color: #2a2a2a;

`;


function App() {
 


  return (
    <div className="App">
      <Container>
        <h1 className="title">Astronomy Photo of the Day</h1>
        <PhotoGrid />
      </Container>
    </div>
  );
}

export default App;
