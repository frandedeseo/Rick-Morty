// React
import { View, FlatList, TouchableOpacity, Image, Animated } from 'react-native';
import { useRef, useState } from 'react';

// Components
import CharacterSummary from './CharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

// Redux 
import { useDispatch, useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';

export default function CharacterList({ handlePress, addCharacterToFavorites, removeCharacterFromFavorites }) {
    const characters = useSelector(state => state.characters.value.results)
    const { getNextCharacters } = useApi();
    const scrollY = useRef(new Animated.Value(0)).current;

    const isFavorite = (item) => {
        //Consulta a firebase si esta en los favoritos el elemento
    }

    return (
        <View style = {Styles.container}>
            {characters && (
                <Animated.FlatList 
                    data = {characters}
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
                    renderItem = {({ item, index }) => <CharacterSummary character = {item} index = {index} handlePress = {handlePress} addCharacterToFavorites = {addCharacterToFavorites} removeCharacterFromFavorites = {removeCharacterFromFavorites} favorite = {false} scrollY = {scrollY} />}
                />
            )}

            {!characters && (
                <View style = {Styles.noResultados}>
                    <Image style = {Styles.imgMortyEnojado} source = {require('../assets/mortyEnojado.png')} />
                    <Image style = {Styles.imgNoResultados} source = {require('../assets/noResultados.jpg')} />
                </View>
            )}
        </View>
    );
}