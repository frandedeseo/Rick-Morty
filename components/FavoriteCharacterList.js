// React
import { View, FlatList, Image, Animated } from 'react-native';
import { useRef } from 'react';

// Components
import FavoriteCharacterSummary from './FavoriteCharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function FavoriteCharacterList({ data, handlePressCharacter, handleNextCharacters, handlePressIcon, handlePressComment }) {
    const scrollY = useRef(new Animated.Value(0)).current;

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
                    renderItem = {({ item, index }) => <FavoriteCharacterSummary character = {item} index = {index}  scrollY = {scrollY} handlePressCharacter = {handlePressCharacter} handlePressIcon = {handlePressIcon} handlePressComment = {handlePressComment}/>}
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