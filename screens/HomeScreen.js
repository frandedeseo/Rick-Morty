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

export default function HomeScreen() {
    const [character, setCharacter] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const charactersData = useSelector(state => state.characters.value);
    const { getCharactersFromApi, getFilteredCharacters } = useApi();
    const dispatch = useDispatch();

    useEffect(() => {
        getCharactersFromApi();
    }, [])

    const handlePress = (character) => {
        setModalVisible(true);
        setCharacter(character);
    }

    const handleClose = () => {
        setModalVisible(false);
        setCharacter({});
    }

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
                    handlePress = {handlePress}
                    addCharacterToFavorites = {addCharacterToFavorites}
                    removeCharacterFromFavorites = {removeCharacterFromFavorites}
                />
            )}

            <Modal transparent visible = {modalVisible} animationType = "slide">
                <Character
                    character = {character}
                    handleClose = {handleClose}
                />
            </Modal>
        </View>

        {modalVisible && (
            <View style = {Styles.blur} />
        )}
        </>
    )
}