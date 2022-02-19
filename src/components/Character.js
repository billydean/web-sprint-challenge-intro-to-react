import React, { useState } from "react";
import axios from "axios";
// // import OtherAPI from "./OtherAPI";

// // Write your Character component here

const Character = function() {
const characterList = [];
class Character {
  constructor(obj) {
    this.name = obj.name;
    this.height = obj.height;
    this.hair = obj.hair_color;
    this.skin = obj.skin_color;
    this.eye = obj.eye_color;
    this.birthYear = obj.birth_year;
    this.gender = obj.gender;
    this.planetAPI = obj.homeworld;
    this.filmAPIs = obj.films;
    this.speciesAPI = obj.species;
  }
}
const [charObject, setCharObject] = useState({});
for (let count=1;count<83;count++) {
  axios.get(`https://swapi.dev/api/people/${count}`)
    .then(res => {
      setCharObject(res.data);
    })
    .catch(err => console.error(err))
    .finally(characterList.push(new Character(charObject)))
}

return (
  <div></div>
)
}
export default Character;

// const Character = (prop) => {
//   const [name, setName] = useState("");
//   const [height, setHeight] = useState("");
//   const [hair, setHairColor] = useState("");
//   const [skin, setSkinColor] = useState("");
//   const [eye, setEyeColor] = useState("");
//   const [birthYear, setBirthYear] = useState("");
//   const [gender, setGender] = useState("");
//   // const [planetApi, setPlanetApi] = useState("");
//   // const [filmApi, setFilmApi] = useState([]);
//   // const [speciesApi, setSpeciesApi] = useState("");

//   const {num,id} = prop;
//   const stateSetter = (num) => {
//     axios
//       .get(`https://swapi.dev/api/people/${num}`)
//       .then((res) => {
//         setName(res.data.name); 
//         setHeight(res.data.height);
//         setHairColor(res.data.hair_color);
//         setSkinColor(res.data.skin_color);
//         setEyeColor(res.data.eye_color);
//         setBirthYear(res.data.birth_year);
//         setGender(res.data.gender);
//       })
//       .catch((err) => console.error(err));
//   };
//   stateSetter(num);
//   return (
//     <div id={id}>
//     <h2>{ name }</h2>
//     <div>
//         <div>
//             <div>
//                 <p>{ birthYear }</p>
//                 <p>{ gender }</p>
//                 <p>{ height }</p>
//             </div>
//             <div>
//                 <p>{ hair }</p>
//                 <p>{ skin }</p>
//                 <p>{ eye }</p>
//             </div>
//         </div>
//         {/* <OtherAPI planetApi={ planetApi } filmApi={ filmApi } speciesApi={ speciesApi } gender={ gender } key={ id }/> */}
//     </div>
//     </div>
//   )
// };


// export default Character;
// /*

//   name ""
//   height ""
//   mass ""
//   hair_color ""
//   skin_color ""
//   eye_color ""
//   birth_year ""
//   gender ""
// for (let i=1; i<83; i++) {
//         // setPlanetApi(res.homeworld);
//         // setFilmApi(res.films);
//         // setSpeciesApi(res.species[0]);
// }
// axios.get(`https://swapi.dev/api/people`)
//     .then(res => {
//         axios.get()
//     })
//     .catch()
// */
// /*
// API DATA:
//   - 82 count
//   - 9 pages
//   n=1
//   while n < 83
//   /api/people/${n}





//   name ""
//   height ""
//   mass ""
//   hair_color ""
//   skin_color ""
//   eye_color ""
//   birth_year ""
//   gender ""





//   Character passes to Planet, Film, and Species for their sideeffects

//   Components = *
//     Header *
//         Nav *
//         Search Bar *
//     Body *
//         Headline
//         Cards:*
//             Closed
//             Open
//                 Character*
//                     Name, Height, Mass, Hair, Skin, Eye, Birth, Gender
//                         Planet*
//                         Film*
//                         Species*

        
//     Footer *

//     Component [props from]
//     ----------------------
//     Header [Nav, Search]
//     Nav
//     Search
//     Body [Card]
//     Card [Character, Planet, Film, Species]
//     Character 
//     Planet [Character]
//     Film [Character]
//     Species [Character]
// */
