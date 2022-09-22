// React
import { View, FlatList, Image } from 'react-native';

// Components
import CharacterSummary from './CharacterSummary';
import { useState } from 'react';
// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function CharacterList({ data, handlePress, handleNextCharacters }) {
    const [dataIsEmpty, setDataIsEmpty] = useState(JSON.stringify(data)==JSON.stringify({"error": "There is nothing here"}));
    return (
        <View style = {Styles.container}>
            {!dataIsEmpty && (
            <FlatList 
                data = {data} 
                onEndReachedThreshold = {0.5}
                onEndReached = {handleNextCharacters} 
                keyExtractor = {character => character.id} 
                contentContainerStyle = {{ paddingBottom: 200 }}
                renderItem = {({ item }) => <CharacterSummary item = {item} handlePress = {handlePress} />}
            />
            )}
            {dataIsEmpty && (
                
                <Image style = {Styles.img1} source = {require('../assets/moreIcon.png')} />
                
            )}
        </View>
    );
}