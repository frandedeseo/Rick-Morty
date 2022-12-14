// React
import { StatusBar, View, FlatList, SafeAreaView } from 'react-native';
import { useEffect } from 'react';

// Components
import Topbar from '../components/Topbar';
import HistoryItem from '../components/HistoryItem';

// Styles
import { Styles } from '../AppStyles';

//Redux
import { useSelector, useDispatch } from 'react-redux';


import { get_history } from '../redux/historySlice';

// Firebase
import { database } from '../firebase/config';
import { ref, set, onChildAdded } from "firebase/database";

export default function FavoritesScreen() {
    dispatch = useDispatch();
    useEffect(() => {
        const historyRef = ref(database, 'history/');

        onChildAdded(historyRef, (accion) => {
            dispatch(get_history(accion));
        })
    }, []);

    const historial = useSelector(state => state.history.value);

    return (
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
    )
}