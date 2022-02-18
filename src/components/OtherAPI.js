import React,{ useState, useEffect } from 'react';

<OtherAPI planetApi={ planetApi } filmApi={ filmApi } speciesApi={ speciesApi }/>


const OtherAPI = (props) => {
    const { planetApi, filmApi, speciesApi } = props;
    const [planetName, setPlanetName] = useState("");
    const [planetPop, setPlanetPop] = useState("");
    const [filmDateArray, setFilmDateArray] = useState([]);
    const [filmNameArray, setFilmNameArray] = useState([]);
    const [speciesName, setSpeciesName] = useState("");

    useEffect(() => {
    axios.get(`${planetApi}`)
        .then(res => {
            setPlanetName(res.name);
            setPlanetPop(res.population);
        })
        .catch(err => console.error(err))

    filmApi.forEach(api => {
        axios.get(api)
            .then(res => {
                setFilmDateArray(filmDateArray.push(res.release_date.slice(0,5)));
                setFilmNameArray(filmNameArray.push(res.name));
            })
            .catch(err => console.error(err))
    })
    axios.get(`${speciesApi}`)
        .then(res => {
            setSpeciesName(res.name)
        })
        .catch(err => console.error(err))
},[])
    let filmInfo = "";
    if (filmNameArray.length < 3) {
        if (filmNameArray.length > 1) {
            filmInfo = `${filmNameArray[0]} (${filmDateArray[0]}) and ${filmNameArray[1]} (${filmDateArray[1]}).`
        } else {
            filmInfo = `the ${filmDateArray[0]} film, ${filmNameArray[0]}.`;
        }
    } else {
        for (let i=0; i<filmNameArray.length-1; i++) {
            filmInfo += `${filmNameArray[i]} (${filmDateArray[i]}),`
        }
        filmInfo += `and ${filmNameArray[-1]} (${filmDateArray[-1]}).`
    }



return(
    <div></div>
)

};

export default OtherAPI;

/*
planet: one of (swapi.dev/api/planets/#).population folks from ().name

films: if one: appeared in the ().release_date.slice(0,5) film, (api/films/#).name
        if more: appeared in ().name (().release_date.slice(0,5)) and...
        if > 2: appeared in, , and...

species: was a (api/species/#).name
    if empty-- (api/species/1)*/