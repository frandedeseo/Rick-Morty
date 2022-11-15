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
import { ref, remove, onChildAdded, onChildRemoved, get, child } from "firebase/database";

// Styles
import { Styles } from '../AppStyles';

import { useDispatch, useSelector } from 'react-redux';
import { get_characters, get_favorite_characters, remove_favorite_character } from '../redux/reducers/favoriteCharactersSlice';

export default function FavoritesScreen() {
    const favoriteCharactersData = useSelector(state => state.favoriteCharacters);
    const modalVisible = useSelector(state => state.characterModal.value);
    const modalCommentVisible = useSelector(state => state.commentModal);
    const dispatch = useDispatch();

    useEffect(() => {
        const charactersRef = ref(database, 'favoriteCharacters/');

        // get(child(charactersRef, 'favoriteCharacters/'))
        // .then((snapshot) => {
        //     var characters = [];
        //     snapshot.forEach(char => {
                
        //         var serializableObject = JSON.parse(JSON.stringify(char.val())).character;
        //         if (serializableObject!=undefined){
        //             characters.push(serializableObject);
        //         }
                
        //     })
        //     dispatch(get_characters(characters));
        // })
        onChildAdded(charactersRef, (char) => {
            var serializableObject = JSON.parse(JSON.stringify(char.val())).character;
            console.log(serializableObject);
             dispatch(get_characters(serializableObject));
            
        })

        // onChildRemoved(charactersRef, (char) => {
        //     dispatch(remove_favorite_character(char));
        // })
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

            {favoriteCharactersData.value==null && (
                <ActivityIndicator style={Styles.loading} size='large' color="#00ff00" />
            )} 

            {modalVisible && (
                <Modal transparent visible = {modalVisible} animationType = "slide">
                    <Character
                    />
                </Modal>
            )}

            <Modal transparent visible = {false} animationType = "slide">
                <CommentInput />
            </Modal>
        </View>

        {(modalVisible || false) && (
            <View style = {Styles.blur} />
        )}
        </>
    )
}