// React
import { View, FlatList, Image } from 'react-native';

// Components
import CharacterSummary from './CharacterSummary';
import { useState } from 'react';
// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function CharacterList({ data, handlePress, handleNextCharacters }) {
    //const [dataIsEmpty, setDataIsEmpty] = useState(JSON.stringify(data)==JSON.stringify({"error": "There is nothing here"}));
    return (
        <View style = {Styles.container}>
            {data && (
            <FlatList 
                data = {data} 
                onEndReachedThreshold = {0.5}
                onEndReached = {handleNextCharacters} 
                keyExtractor = {character => character.id} 
                contentContainerStyle = {{ paddingBottom: 200 }}
                renderItem = {({ item }) => <CharacterSummary item = {item} handlePress = {handlePress} />}
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