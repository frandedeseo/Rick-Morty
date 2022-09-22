// React
import { useState } from 'react';

export function useApi() {
    const [data, setData] = useState([]);

    /*
    const [name, setName] = useState(null);
    const [species, setSpecies] = useState(null);
    const [type, setType] = useState(null);
    const [alive, setAlive] = useState(null);
    const [dead, setDead] = useState(null);
    const [unknownStatus, setUnknownStatus] = useState(null);
    const [female, setFemale] = useState(null);
    const [male, setMale] = useState(null);
    const [genderless, setGenderless] = useState(null);
    const [unknownGender, setUnknownGender] = useState(null);
*/
    const getCharactersFromApi = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getNextCharacters = () => {
        if (data.info.next === null)
            return 1;
    
        return fetch(data.info.next)
            .then((response) => response.json())
            .then((json) => {
                setData(prevData => {
                    let newData = json;
                    newData.results = [...prevData.results, ...newData.results]
                    
                    return newData;
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getFilteredCharacters = (parametros) => {
        return fetch(`https://rickandmortyapi.com/api/character/?${parametros.input}&status=${parametros.status}&gender=${parametros.gender}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return { data, getCharactersFromApi, getNextCharacters, getFilteredCharacters };
}