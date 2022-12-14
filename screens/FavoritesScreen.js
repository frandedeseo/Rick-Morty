// React
import { StatusBar, View, Modal, SafeAreaView } from 'react-native';
import { useEffect } from 'react';

// Components
import FavoriteCharacterList from '../components/FavoriteCharacterList';
import CharacterComment from '../components/CharacterComment';
import CommentInput from '../components/CommentInput';
import Topbar from '../components/Topbar';

// Firebase
import { database } from '../firebase/config';
import {
    ref,
    onChildAdded,
    onChildRemoved,
    get,
    child,
} from 'firebase/database';

// Styles
import { Styles } from '../AppStyles';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    get_characters,
    remove_favorite_character,
} from '../redux/reducers/favoriteCharactersSlice';

export default function FavoritesScreen() {
    const modalVisible = useSelector((state) => state.characterModal.value);
    const modalCommentInputVisible = useSelector(
        (state) => state.commentInputModal.value
    );
    const modalCommentVisible = useSelector(
        (state) => state.commentModal.value
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const charactersRef = ref(database, 'favoriteCharacters/');

        onChildAdded(charactersRef, async (char) => {
            var commentary = '';
            const id = JSON.parse(JSON.stringify(char)).character.id;

            let snapshot = await get(
                child(ref(database), `characterCommentaries/${id}`)
            );

            if (snapshot.exists()) {
                commentary = await snapshot.val().commentary;
            }
            dispatch(get_characters(char, commentary));
        });

        onChildRemoved(charactersRef, (char) => {
            dispatch(remove_favorite_character(char));
        });
    }, []);

    return (
        <>
            <View style={Styles.container}>
                <SafeAreaView />
                <StatusBar barStyle='light-content' />

                <Topbar />

                <FavoriteCharacterList />

                <Modal
                    transparent
                    visible={modalCommentVisible}
                    animationType='slide'
                >
                    <CharacterComment />
                </Modal>

                <Modal
                    transparent
                    visible={modalCommentInputVisible}
                    animationType='slide'
                >
                    <CommentInput />
                </Modal>
            </View>

            {(modalVisible ||
                modalCommentInputVisible ||
                modalCommentVisible) && <View style={Styles.blur} />}
        </>
    );
}
