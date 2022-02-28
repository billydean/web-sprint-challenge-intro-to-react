/**
 * This "Placeholder" file is just a way for me to keep the code I had before. I want to start over to see where things fouled up, but I don't want to throw the baby out with the bathwater. The following is organized by component or file.
 */

//Card.js
// import React from 'react';
// import Character from './Character';

// const Card = () => {
//     for (let count=1;count<83;count++) {
//         return (
//             <div>
//                 <Character num={count} id={count}/>
//             </div>
//         )
//     }
// };
// export default Card;

//Character.js
// import React, { useState } from "react";
// import axios from "axios";
// // // import OtherAPI from "./OtherAPI";
// const Character = function() {
// const characterList = [];
// class Character {
//   constructor(obj) {
//     this.name = obj.name;
//     this.height = obj.height;
//     this.hair = obj.hair_color;
//     this.skin = obj.skin_color;
//     this.eye = obj.eye_color;
//     this.birthYear = obj.birth_year;
//     this.gender = obj.gender;
//     this.planetAPI = obj.homeworld;
//     this.filmAPIs = obj.films;
//     this.speciesAPI = obj.species;
//   }
// }
// const [charObject, setCharObject] = useState({});
// for (let count=1;count<83;count++) {
//   axios.get(`https://swapi.dev/api/people/${count}`)
//     .then(res => {
//       setCharObject(res.data);
//     })
//     .catch(err => console.error(err))
//     .finally(characterList.push(new Character(charObject)))
// }
// return (
//   <div></div>
// )
// }
// export default Character;
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

//Film.js

//OtherAPI.js
// import React,{ useState } from 'react';
// import axios from 'axios';

// const OtherAPI = (props) => {
//     const { planetApi, filmApi, speciesApi, gender } = props;
//     const [planetName, setPlanetName] = useState("");
//     const [planetPop, setPlanetPop] = useState("");
//     const [filmDateArray, setFilmDateArray] = useState([]);
//     const [filmNameArray, setFilmNameArray] = useState([]);
//     const [speciesName, setSpeciesName] = useState("");
//     const [pronoun, setPronoun] = useState("");
//     axios.get(`${planetApi}`)
//         .then(res => {
//             setPlanetName(res.name);
//             setPlanetPop(res.population);
//         })
//         .catch(err => console.error(err))
//     filmApi.forEach(api => {
//         axios.get(api)
//             .then(res => {
//                 setFilmDateArray(filmDateArray.push(res.release_date.slice(0,5)));
//                 setFilmNameArray(filmNameArray.push(res.name));
//             })
//             .catch(err => console.error(err))
//     })
//     if (speciesApi) {axios.get(`${speciesApi}`)
//         .then(res => {
//             setSpeciesName(res.name);
//         })
//         .catch(err=>console.error(err))
//     } else {
//         setSpeciesName("human");
//     }   
//     let filmInfo = "";
//     if (filmNameArray.length < 3) {
//         if (filmNameArray.length > 1) {
//             filmInfo = `${filmNameArray[0]} (${filmDateArray[0]}) and ${filmNameArray[1]} (${filmDateArray[1]}).`
//         } else {
//             filmInfo = `the ${filmDateArray[0]} film, ${filmNameArray[0]}.`;
//         }
//     } else {
//         for (let i=0; i<filmNameArray.length-1; i++) {
//             filmInfo += `${filmNameArray[i]} (${filmDateArray[i]}),`
//         }
//         filmInfo += `and ${filmNameArray[-1]} (${filmDateArray[-1]}).`
//     }
//     if (gender === 'male') {
//         setPronoun("he");
//     } else if (gender === 'female') {
//         setPronoun("she");
//     } else {
//         setPronoun("they");
//     }
// return(
//     <div>
//         <p>One of { planetPop } { speciesName }s from { planetName }, { pronoun } appeared in { filmInfo }</p>
//     </div>
// )
// }
// export default OtherAPI

//Plan.js
// import { useState } from 'react';
// import axios from 'axios';

// const Plan = (api) => {
//     const [planet, setPlanet] = useState("");
//     const [pop, setPop] = useState("");
//     axios.get(api)
//         .then(res => {
//             setPlanet(res.name);
//             setPop(res.population);
//         })
//         .catch(err => console.error(err))
//     return [planet, pop];
// }

// export default Plan;

//Spec.js