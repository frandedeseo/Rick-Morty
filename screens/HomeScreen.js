// React
import { StatusBar, View, Modal, SafeAreaView } from 'react-native';
import { useEffect } from 'react';

// Components
import CharacterList from '../components/CharacterList';
import Character from '../components/Character';
import Topbar from '../components/Topbar';

// Hooks
import { useApi } from '../hooks/useApi';

// Firebase
import { database } from '../firebase/config';
import { ref, remove, set, get, child } from 'firebase/database';

// Styles
import { Styles } from '../AppStyles';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { get_characters, get_favorite_characters, remove_favorite_character } from '../redux/reducers/favoriteCharactersSlice';

export default function HomeScreen() {
    const modalVisible = useSelector(state => state.characterModal.value);
    const charactersData = useSelector(state => state.characters.value);
    
    const dispatch = useDispatch();
    const { getCharactersFromApi, getFilteredCharacters } = useApi();

    useEffect(() => {
        getCharactersFromApi();
    }, [])

    const removeCharacterFromFavorites = (character) => {
        remove(ref(database, 'favoriteCharacters/' + character.id));
    }

    return (
        <>
        <View style = {Styles.container}>
            <SafeAreaView />
            <StatusBar  barStyle = "light-content"/>
            
            <Topbar getFilteredCharacters = {getFilteredCharacters} filter = {true} />
            
            {charactersData && (
                <CharacterList
                    removeCharacterFromFavorites = {removeCharacterFromFavorites}
                />
            )}

            {modalVisible && (
            <Modal transparent visible = {modalVisible} animationType = "slide">
                <Character />
            </Modal>
            )}
        </View>

        {modalVisible && (
            <View style = {Styles.blur} />
        )}
        </>
    )
}