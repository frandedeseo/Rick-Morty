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
import { ref, set } from 'firebase/database';

// Styles
import { Styles } from '../AppStyles';

export default function HomeScreen() {
    const [character, setCharacter] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const { data, getCharactersFromApi, getNextCharacters, getFilteredCharacters } = useApi();

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

    const addCharactersToFavorites = (character) => {
        set(ref(database, 'favoriteCharacters/' + character.id), {
            character: character
        });
        //console.log(character);
    }

    return (
        <>
        <View style = {Styles.container}>
            <SafeAreaView />
            <StatusBar  barStyle = "light-content"/>
            
            <Topbar getFilteredCharacters = {getFilteredCharacters} />
            
            {data && (
                <CharacterList
                    data = {data.results}
                    icon = {require('../assets/favorites_unfocused.png')}
                    handlePress = {handlePress}
                    handleNextCharacters = {getNextCharacters}
                    handlePressIcon = {addCharactersToFavorites}
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