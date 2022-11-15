// React
import { View, Image, Animated } from 'react-native';
import { useRef } from 'react';

// Components
import FavoriteCharacterSummary from './FavoriteCharacterSummary';

// Hooks
import { useApi } from '../hooks/useApi';

// Styles
import { Styles } from '../styles/CharacterListStyles';

import { useDispatch, useSelector } from 'react-redux';

export default function FavoriteCharacterList({ handlePressIcon, handlePressComment }) {
    const scrollY = useRef(new Animated.Value(0)).current;
    const favoriteCharacters = useSelector(state => state.favoriteCharacters.value);

    return (
        <View style = {Styles.container}>
            {favoriteCharacters && (
                <Animated.FlatList 
                    data = {favoriteCharacters}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )   
                    
                    }
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle = {{ paddingBottom: 200 }}
                    renderItem = {({ item, index }) => <FavoriteCharacterSummary character = {item} index = {index}  scrollY = {scrollY} handlePressIcon = {handlePressIcon} handlePressComment = {handlePressComment}/>}
                />
            )}

            {!favoriteCharacters && (
                <View style = {Styles.noResultados}>
                    <Image style = {Styles.imgMortyEnojado} source = {require('../assets/mortyEnojado.png')} />
                    <Image style = {Styles.imgNoResultados} source = {require('../assets/noResultados.jpg')} />
                </View>
            )}

        </View>
    );
}