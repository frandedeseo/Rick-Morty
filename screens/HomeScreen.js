// React
import { StatusBar, View, Modal, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';

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
import { useDispatch, useSelector } from 'react-redux';
import { get_characters } from '../redux/reducers/charactersSlice';
import { set_character } from '../redux/reducers/onlyCharacterSlice';

export default function HomeScreen() {
    const modalVisible = useSelector(state => state.characterModal.value);
    const charactersData = useSelector(state => state.characters.value);
    const { getCharactersFromApi, getFilteredCharacters } = useApi();
    const dispatch = useDispatch();

    useEffect(() => {
        getCharactersFromApi();
    }, [])

    const addCharacterToFavorites = (character) => {
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
            <Modal transparent visible = {modalVisible.visibility} animationType = "slide">
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