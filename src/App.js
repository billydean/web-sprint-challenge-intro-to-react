import React, { useState,useEffect } from 'react';
import './App.css';
// import CharacterList component
import CharacterList from "./components/CharacterList"
// import Search and Footer components
import Search from './components/Search';
import Footer from './components/Footer';
// import uuid4
import {v4 as uuid } from 'uuid';
// import axios
import axios from 'axios';

const App = () => {
  const [characters, setChars] = useState([]);
  axios.get(`https://swapi.dev/api/people`)
    .then(response => {
      setChars(
        response.data.map(person => {
          return {...person, id: uuid()};
        })
      )
    })
    .catch(err => console.error(err))
  

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <div className="Header">
        <h1>Star Wars</h1>
      </div>
      <Search />
      <CharacterList characters={ characters }/>
      <Footer />
    </div>
  );
}

export default App;
