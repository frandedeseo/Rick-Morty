// React
import { View, FlatList, Image } from 'react-native';

// Components
import CharacterSummary from './CharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function CharacterList({ data, icon, handlePress, handleNextCharacters }) {

    return (
        <View style = {Styles.container}>
            {data && (
                <FlatList 
                    data = {data} 
                    onEndReachedThreshold = {0.5}
                    onEndReached = {handleNextCharacters} 
                    keyExtractor = {character => character.id} 
                    contentContainerStyle = {{ paddingBottom: 200 }}
                    renderItem = {({ item }) => <CharacterSummary item = {item} handlePress = {handlePress} icon = {icon} />}
                />
            )}

            {!data && (
                <View style = {Styles.noResultados}>
                    <Image style = {Styles.imgMortyEnojado} source = {require('../assets/mortyEnojado.png')} />
                    <Image style = {Styles.imgNoResultados} source = {require('../assets/noResultados.jpg')} />
                </View>
            )}
        </View>
    );
}