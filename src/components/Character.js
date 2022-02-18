import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Planet from "./Planet";
import Species from "./Species";
import Film from "./Film";

// Write your Character component here



const Character = (prop) => {

  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [hair, setHairColor] = useState("");
  const [skin, setSkinColor] = useState("");
  const [eye, setEyeColor] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  const [planetApi, setPlanetApi] = useState("");
  const [filmApi, setFilmApi] = useState([]);
  const [speciesApi, setSpeciesApi] = useState([]);

    const num = prop;
    const stateSetter = (num) => {
    axios.get(`https://swapi.dev/api/${num}`)
        .then(res => {
            setName(res.name);
            setHeight(res.height);
            setMass(res.mass);
            setHairColor(res.hair_color);
            setSkinColor(res.skin_color);
            setEyeColor(res.eye_color);
            setBirthYear(res.birth_year);
            setGender(res.gender);
            setPlanetApi(res.homeworld);
            setFilmApi(res.films);
            setSpeciesApi(res.species);
        })
        .catch(err => console.error(err))
    

};
stateSetter(num);
};

export default Character;
/*

  name ""
  height ""
  mass ""
  hair_color ""
  skin_color ""
  eye_color ""
  birth_year ""
  gender ""
for (let i=1; i<83; i++) {

}
axios.get(`https://swapi.dev/api/people`)
    .then(res => {
        axios.get()
    })
    .catch()
*/
/*
API DATA:
  - 82 count
  - 9 pages
  n=1
  while n < 83
  /api/people/${n}

planet: one of (swapi.dev/api/planets/#).population folks from ().name

films: if one: appeared in the ().release_date.slice(0,5) film, (api/films/#).name
        if more: appeared in ().name (().release_date.slice(0,5)) and...
        if > 2: appeared in, , and...

species: was a (api/species/#).name
    if empty-- (api/species/1)



  name ""
  height ""
  mass ""
  hair_color ""
  skin_color ""
  eye_color ""
  birth_year ""
  gender ""





  Character passes to Planet, Film, and Species for their sideeffects

  Components = *
    Header *
        Nav *
        Search Bar *
    Body *
        Headline
        Cards:*
            Closed
            Open
                Character*
                    Name, Height, Mass, Hair, Skin, Eye, Birth, Gender
                        Planet*
                        Film*
                        Species*

        
    Footer *

    Component [props from]
    ----------------------
    Header [Nav, Search]
    Nav
    Search
    Body [Card]
    Card [Character, Planet, Film, Species]
    Character 
    Planet [Character]
    Film [Character]
    Species [Character]
*/