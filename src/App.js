import React, { useState,useEffect } from 'react';
import './App.css';
// import CharacterList component
import CharacterList from "./components/CharacterList"
// import Search and Footer components
import Search from './components/Search';
import Footer from './components/Footer';

const App = () => {
  const [characters, setChars] = useState([]);
  useEffect(()=>{
    setChars([{
      name: 'Chewbacca',
      height: 'tall',
      mass: 'heavy',
      hair_color: 'brown',
      skin_color: 'brown',
      eye_color: 'brown',
      gender: 'male',
      url: 'https://swapi.dev/api/people/1/'
    },    {name: 'Chewbacca',
    height: 'tall',
    mass: 'heavy',
    hair_color: 'brown',
    skin_color: 'brown',
    eye_color: 'brown',
    gender: 'male',
    url: 'https://swapi.dev/api/people/2/'}]);

  },[])
  console.log(characters);

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
