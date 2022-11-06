// React
import { View, FlatList, TouchableOpacity, Image, Animated } from 'react-native';
import { useRef } from 'react';

// Components
import CharacterSummary from './CharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function CharacterList({ data, icon, handlePress, handleNextCharacters, handlePressIcon }) {
    const scrollY = useRef(new Animated.Value(0)).current;
    return (
        <View style = {Styles.container}>
            {data && (
                <Animated.FlatList 
                    data = {data}
                    extraData={data}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )   
                    
                    }
                    onEndReachedThreshold = {0.5}
                    onEndReached = {handleNextCharacters} 
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle = {{ paddingBottom: 200 }}
                    renderItem = {({ item, index }) => <CharacterSummary character = {item} index = {index} handlePress = {handlePress} handlePressIcon = {handlePressIcon}  icon = {icon} scrollY = {scrollY} />}
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