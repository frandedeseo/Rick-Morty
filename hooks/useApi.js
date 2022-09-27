// React
import { useState } from 'react';

export function useApi() {
    const [data, setData] = useState(null);

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
                if (data.info.next != null){
                    console.log(error);
                }
            })
    }

    const getFilteredCharacters = (parametros) => {
        return fetch(`https://rickandmortyapi.com/api/character/?${parametros.input}&status=${parametros.status}&gender=${parametros.gender}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                setData({results: []});
            })
    }

    return { data, getCharactersFromApi, getNextCharacters, getFilteredCharacters };
}