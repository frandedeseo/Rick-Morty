// React
import { StatusBar, View, Modal, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';

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

import { useDispatch, useSelector } from 'react-redux';
import { get_characters, remove_favorite_character } from '../redux/reducers/favoriteCharactersSlice';
import CharacterComment from '../components/CharacterComment';

export default function FavoritesScreen() {
    const favoriteCharactersData = useSelector(state => state.favoriteCharacters.value);
    const modalVisible = useSelector(state => state.characterModal.value);
    const modalCommentInputVisible = useSelector(state => state.commentInputModal.value);
    const modalCommentVisible = useSelector(state => state.commentModal.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const charactersRef = ref(database, 'favoriteCharacters/');

        onChildAdded(charactersRef, (char) => {
            dispatch(get_characters(char));
        })

        onChildRemoved(charactersRef, (char) => {
            dispatch(remove_favorite_character(char));
        })
    }, [])

    const removeCharacter = (character) => {
        remove(ref(database, 'favoriteCharacters/' + character.id));
    }

    return (
        <>
        <View style = {Styles.container}>
            <SafeAreaView />
            <StatusBar  barStyle = "light-content"/>
            
            <Topbar /> 
            
            {favoriteCharactersData && (
                <FavoriteCharacterList
                    handlePressIcon = {removeCharacter}
                />
            )}

            {favoriteCharactersData == null && (
                <ActivityIndicator style={Styles.loading} size='large' color="#00ff00" />
            )} 

            {modalVisible && (
                <Modal transparent visible = {modalVisible} animationType = "slide">
                    <Character />
                </Modal>
            )}

            <Modal transparent visible = {modalCommentVisible} animationType = 'slide'>
                <CharacterComment />
            </Modal>

            <Modal transparent visible = {modalCommentInputVisible} animationType = "slide">
                <CommentInput />
            </Modal>
        </View>

        {(modalVisible || modalCommentInputVisible || modalCommentVisible) && (
            <View style = {Styles.blur} />
        )}
        </>
    )
}