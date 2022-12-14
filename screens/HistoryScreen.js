// React
import { StatusBar, View, FlatList, SafeAreaView } from 'react-native';

// Components
import Topbar from '../components/Topbar';
import HistoryItem from '../components/HistoryItem';

// Styles
import { Styles } from '../AppStyles';

//Redux
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {

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