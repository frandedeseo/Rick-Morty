// React
import { View, FlatList, TouchableOpacity, Image, Animated } from 'react-native';
import { useRef, useState } from 'react';

// Components
import CharacterSummary from './CharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function CharacterList({ data, handlePress, handleNextCharacters, addCharacterToFavorites, removeCharacterFromFavorites }) {
    const scrollY = useRef(new Animated.Value(0)).current;

    const isFavorite = (item) => {
        //Consulta a firebase si esta en los favoritos el elemento
    }

    return (
        <View style = {Styles.container}>
            {data && (
                <Animated.FlatList 
                    data = {data}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )   
                    
                    }
                    onEndReachedThreshold = {0.5}
                    onEndReached = {handleNextCharacters} 
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle = {{ paddingBottom: 200 }}
                    renderItem = {({ item, index }) => <CharacterSummary character = {item} index = {index} handlePress = {handlePress} addCharacterToFavorites = {addCharacterToFavorites} removeCharacterFromFavorites = {removeCharacterFromFavorites} favorite = {false} scrollY = {scrollY} />}
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