// React
import { StatusBar, View, Modal, SafeAreaView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import FavoriteCharacterList from '../components/FavoriteCharacterList';
import CommentInput from '../components/CommentInput';
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
    const [modalCharacter, setModalCharacter] = useState(false);
    const [modalComment, setModalComment] = useState(false);

    useEffect(() => {
        const charactersRef = ref(database, 'favoriteCharacters/');

        onChildAdded(charactersRef, (char) => {
            setData(prevData => [...prevData, char.val().character]);
        })

        onChildRemoved(charactersRef, (char) => {
            setData(prevData => prevData.filter(element => element.id !== char.val().character.id))
        })
    }, [])

    const handlePressCharacter = (character) => {
        setModalCharacter(true);
        setCharacter(character);
    }

    const handleCloseCharacter = () => {
        setModalCharacter(false);
        setCharacter({});
    }

    const handlePressComment = (character) => {
        setModalComment(true);
        setCharacter(character);
    }

    const handleCloseComment = () => {
        setModalComment(false);
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
            
            <Topbar /> 
            
            {data && (
                <FavoriteCharacterList
                    data = {data}
                    handlePressCharacter = {handlePressCharacter}
                    handlePressIcon = {removeCharacter}
                    handlePressComment = {handlePressComment}
                />
            )}
            {data.length==0 && (
                <ActivityIndicator style={Styles.loading} size='large' color="#00ff00" />
            )}

            <Modal transparent visible = {modalCharacter} animationType = "slide">
                <Character
                    character = {character}
                    addCommentToCharacter = {addCommentToCharacter}
                    handleClose = {handleCloseCharacter}
                />
            </Modal>

            <Modal transparent visible = {modalComment} animationType = "slide">
                <CommentInput ocultarModal={handleCloseComment} addCommentToCharacter={addCommentToCharacter}/>
            </Modal>
        </View>

        {(modalCharacter || modalComment) && (
            <View style = {Styles.blur} />
        )}
        </>
    )
}