<OtherAPI planetApi={ planetApi } filmApi={ filmApi } speciesApi={ speciesApi }/>


const OtherAPI = (props) => {
    const { planetApi, filmApi, speciesApi } = props;
    const [planetName, setPlanetName] = useState("");
    const [planetPop, setPlanetPop] = useState("");
    const [filmDateArray, setFilmDateArray] = useState([]);
    const [filmNameArray, setFilmNameArray] = useState([]);
    const [speciesName, setSpeciesName] = useState("");

    axios.get(`${planetApi}`)
        .then(res => {
            setPlanetName(res.name);
            setPlanetPop(res.population);
        })
        .catch(err => console.error(err))
    
    let filmInfo = "";
    if (filmApi.length > 2) {
        if (filmApi.length > 1) {

        } else {
            filmInfo = `appeared in the ${}`
        }
    }
    filmApi.forEach(api => {
        axios.get(api)
            .then(res => {
                setFilmDateArray(filmDateArray.push(res.release_date.slice(0,5)));
                setFilmNameArray(filmNameArray.push(res.name));
            })
            .catch(err => console.error(err))
    })

    if (filmNameArray.length < 3) {
        if (filmNameArray.length > 1) {
            filmInfo = `appeared in ${filmNameArray[0]} (${filmDateArray[0]}) and ${filmNameArray[1]} (${filmDateArray[1]}).`

        } else {
            filmInfo = `appeared in the ${filmDateArray[0]} film, ${filmNameArray[0]}.`;
        }
    }

    axios.get(`${filmApi}`)
        .then(res => {
            setFilmArray(res.)
        })

    axios.get(`${speciesApi}`)
        .then(res => {
            setSpeciesName(res.name)
        })
        .catch(err => console.error(err))



};

export default OtherAPI;


planet: one of (swapi.dev/api/planets/#).population folks from ().name

films: if one: appeared in the ().release_date.slice(0,5) film, (api/films/#).name
        if more: appeared in ().name (().release_date.slice(0,5)) and...
        if > 2: appeared in, , and...

species: was a (api/species/#).name
    if empty-- (api/species/1)