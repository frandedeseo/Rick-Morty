// React
import { View, Image, Animated } from 'react-native';
import { useRef } from 'react';

// Components
import CharacterSummary from './CharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

// Redux 
import { useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';

export default function CharacterList() {
    const charactersData = useSelector(state => state.characters.value);
    const scrollY = useRef(new Animated.Value(0)).current;
    const { getNextCharacters } = useApi();

    return (
        <View style = {Styles.container}>
            {charactersData && (
                <>
                {charactersData.results && (
                    <Animated.FlatList 
                        data = {charactersData.results}
                        onScroll= {
                            Animated.event(
                                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                                {useNativeDriver: true}
                            )
                        }
                        onEndReachedThreshold = {0.5}
                        onEndReached = {getNextCharacters} 
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle = {{ paddingBottom: 200 }}
                        renderItem = {({ item, index }) => <CharacterSummary character = {item} index = {index} scrollY = {scrollY} />}
                    />
                )}

                {!charactersData.results && (
                    <View style = {Styles.noResultados}>
                        <Image style = {Styles.imgMortyEnojado} source = {require('../assets/mortyEnojado.png')} />
                        <Image style = {Styles.imgNoResultados} source = {require('../assets/noResultados.jpg')} />
                    </View>
                )}
                </>
            )}
        </View>
    );
}