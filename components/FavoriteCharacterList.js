// React
import { View, Text, Animated } from 'react-native';
import { useRef } from 'react';

// Components
import FavoriteCharacterSummary from './FavoriteCharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

//Redux
import { useSelector } from 'react-redux';

export default function FavoriteCharacterList() {
    const favoriteCharacters = useSelector(state => state.favoriteCharacters.value);
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style = {Styles.container}>
            {favoriteCharacters.length != 0 && (
                <Animated.FlatList 
                    data = {favoriteCharacters}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle = {{ paddingBottom: 200 }}
                    renderItem = {({ item, index }) => <FavoriteCharacterSummary character = {item} index = {index}  scrollY = {scrollY} />}
                />
            )}

            {favoriteCharacters.length == 0 && (
                <View style = {Styles.noResultados}>
                    <Text style = {Styles.txtFavoritosVacio}>No se encuentran elementos en favoritos</Text>
                </View>
            )}

        </View>
    );
}