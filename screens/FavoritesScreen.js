// React
import { StatusBar, View, Modal, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import CharacterList from '../components/CharacterList';
import Character from '../components/Character';
import Topbar from '../components/Topbar';

// Firebase
import { database } from '../firebase/config';
import { ref, remove, onChildAdded, onChildRemoved } from "firebase/database";

// Styles
import { Styles } from '../AppStyles';

export default function FavoritesScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [character, setCharacter] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const charactersRef = ref(database, 'favoriteCharacters/');

        onChildAdded(charactersRef, (char) => {
            setData(prevData => [...prevData, char.val().character]);
        })

        onChildRemoved(charactersRef, (char) => {
            setData(prevData => prevData.filter(element => element.id !== char.val().character.id))
        })
    }, [])

    const handlePress = (character) => {
        setModalVisible(true);
        setCharacter(character);
    }

    const handleClose = () => {
        setModalVisible(false);
        setCharacter({});
    }

    const removeCharacter = (character) => {
        remove(ref(database, 'favoriteCharacters/' + character.id));
    }

    return (
        <>
        <View style = {Styles.container}>
            <SafeAreaView />
            <StatusBar  barStyle = "light-content"/>
            
            {/* <Topbar getFilteredCharacters = {getFilteredCharacters} /> */}
            
            {data && (
                <CharacterList
                    data = {data}
                    icon = {require('../assets/cross-dark.png')}
                    handlePress = {handlePress}
                    handlePressIcon = {removeCharacter}
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