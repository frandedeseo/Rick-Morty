// React
import { StatusBar, View, Modal, FlatList, SafeAreaView } from 'react-native';
import { useEffect } from 'react';

// Components
import Topbar from '../components/Topbar';
import HistoryItem from '../components/HistoryItem';

// Firebase
import { database } from '../firebase/config';
import { ref, onChildAdded, onChildRemoved } from "firebase/database";

// Styles
import { Styles } from '../AppStyles';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { get_characters, remove_favorite_character } from '../redux/reducers/favoriteCharactersSlice';

export default function FavoritesScreen() {
    const dispatch = useDispatch();
    const historial = useSelector(state => state.history.value);

    // useEffect(() => {
    //     const charactersRef = ref(database, 'favoriteCharacters/');

    //     onChildAdded(charactersRef, (char) => {
    //         dispatch(get_characters(char));
    //     })

    //     onChildRemoved(charactersRef, (char) => {
    //         dispatch(remove_favorite_character(char));
    //     })
    // }, [])

    return (
        <>
        <View style = {Styles.container}>

            <SafeAreaView />
            <StatusBar  barStyle = "light-content"/>
            <Topbar /> 

            {historial && (
                <FlatList 
                    data = {historial}
                    contentContainerStyle = {{ paddingBottom: 200 }}
                    renderItem = {({ item, index }) => <HistoryItem contenido = {item}/>}
                />
            )}
            
            
            

        </View>
        </>
    )
}