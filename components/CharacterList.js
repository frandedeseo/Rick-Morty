// React
import { View, FlatList } from 'react-native';

// Components
import CharacterSummary from './CharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function CharacterList({ data, handlePress, handleNextCharacters }) {

    return (
        <View style = {Styles.container}>
            <FlatList 
                data = {data} 
                onEndReachedThreshold = {0.5}
                onEndReached = {handleNextCharacters} 
                keyExtractor = {character => character.id} 
                contentContainerStyle = {{ paddingBottom: 200 }}
                renderItem = {({ item }) => <CharacterSummary item = {item} handlePress = {handlePress} />}
            />
        </View>
    );
}