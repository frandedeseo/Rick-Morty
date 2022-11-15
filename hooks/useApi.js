// React
import { useDispatch, useSelector } from 'react-redux';
import { get_characters, get_next_characters } from '../redux/reducers/charactersSlice';

export function useApi() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.characters.value);

    const getCharactersFromApi = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                dispatch(get_characters(json));
                
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getNextCharacters = () => {
        return fetch(data.info.next)
            .then((response) => response.json())
            .then((json) => {
                dispatch(get_next_characters(json))
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
                dispatch(get_characters(json));
            })
            .catch((error) => {
                dispatch({results: null});
            })
    }

    return { getCharactersFromApi, getNextCharacters, getFilteredCharacters };
}