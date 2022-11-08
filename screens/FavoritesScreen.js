// React
import { StatusBar, View, Modal, SafeAreaView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import CharacterList from '../components/CharacterList';
import FavoriteCharacter from '../components/FavoriteCharacter';
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
    const [isFavorite, setIsFavorite] = useState(true);

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

    const addCommentToCharacter = (text) => {

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
                    isFavorite = {isFavorite}
                    setIsFavorite = {setIsFavorite}
                    handlePress = {handlePress}
                    handlePressIcon = {removeCharacter}
                />
            )}
            {data.length==0 && (
                <ActivityIndicator style={Styles.loading} size='large' color="#00ff00" />
            )}

            <Modal transparent visible = {modalVisible} animationType = "slide">
                <FavoriteCharacter
                    character = {character}
                    addCommentToCharacter = {addCommentToCharacter}
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