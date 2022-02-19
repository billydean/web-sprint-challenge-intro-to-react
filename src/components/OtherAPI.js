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