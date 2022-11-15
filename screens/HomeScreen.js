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
import { ref, remove, set } from 'firebase/database';

// Styles
import { Styles } from '../AppStyles';

// Redux
import { useSelector } from 'react-redux';

export default function HomeScreen() {
    const modalVisible = useSelector(state => state.characterModal.value);
    const charactersData = useSelector(state => state.characters.value);
    const { getCharactersFromApi, getFilteredCharacters } = useApi();

    useEffect(() => {
        getCharactersFromApi();
    }, [])

    const addCharacterToFavorites = async (character) => {
        set(ref(database, 'favoriteCharacters/' + character.id), {
            character: character
        });
    }

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
                    addCharacterToFavorites = {addCharacterToFavorites}
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