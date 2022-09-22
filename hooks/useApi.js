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

    const getData = async (request, setFunc) => {
        try {
            let response = await fetch(request);
            let json = await response.json();
            setData(data + json);
        }
        catch (err) {
            console.log(err);
        }
    }

    const getNextCharacters = () => {
        if (data.info.next==null){
            return 1;
        }
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
    const deleteDuplcateJsonObjects = (datos) => {
        var temp=[ ];
        data=data.filter((item)=>{
            if(!temp.includes(item.userid)){
                temp.push(item.userid)
                return true;
            }
        })
        return temp;
    }

    const getFilteredCharacters = (param) => {
        var parametros =  JSON.parse(param);
        var request;
        console.log(parametros);
        if (parametros.filterText == "name"){
            request = `https://rickandmortyapi.com/api/character/?name=${parametros.text}&status=${parametros.status}&gender=${parametros.gender}`;
        }else if (parametros.filterText == "type"){
            request = `https://rickandmortyapi.com/api/character/?type=${parametros.text}&status=${parametros.status}&gender=${parametros.gender}`;
        }else if(parametros.filterText == "species"){
            request = `https://rickandmortyapi.com/api/character/?species=${parametros.text}&status=${parametros.status}&gender=${parametros.gender}`;
        }
        console.log(request);
        return fetch(request)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                console.log(json);
            })
            .catch((error) => {
                console.log(error);
            })
        //const datosConcatenados = type.concat(name.concat(species));
        //setData(deleteDuplcateJsonObjects(datosConcatenados));
    }

    const getEpisode = (episodeURL) => {
        return fetch(episodeURL)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return { data, getCharactersFromApi, getNextCharacters, getEpisode, getFilteredCharacters };
}