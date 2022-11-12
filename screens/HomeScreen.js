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

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { get_all_characters } from '../redux/reducers/dataSlice';

export default function HomeScreen() {
    const [character, setCharacter] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const { data, getCharactersFromApi, getNextCharacters, getFilteredCharacters } = useApi();

    const charactersData = useSelector(state => state.data.value)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_characters(data));
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
            
            {data && (
                <CharacterList
                    data = {charactersData}
                    handlePress = {handlePress}
                    handleNextCharacters = {getNextCharacters}
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