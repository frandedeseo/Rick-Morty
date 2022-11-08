// React
import { View, FlatList, TouchableOpacity, Image, Animated } from 'react-native';
import { useRef, useState } from 'react';

// Components
import CharacterSummary from './CharacterSummary';

// Styles
import { Styles } from '../styles/CharacterListStyles';

export default function CharacterList({ data, isFavorite, setIsFavorite, handlePress, handleNextCharacters, handlePressIcon }) {
    const scrollY = useRef(new Animated.Value(0)).current;
    const [dataVariation, setDataVariation] = useState(false);

    const handlePressIcon2 = (character) => {
        setDataVariation(!dataVariation);
        console.log(dataVariation);
        handlePressIcon(character);
    }
    //data.addEventListener("change", () => setDataVariation(!dataVariation));
    return (
        <View style = {Styles.container}>
            {data && (
                <Animated.FlatList 
                    data = {data}
                    extraData={dataVariation.state}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )   
                    
                    }
                    onEndReachedThreshold = {0.5}
                    onEndReached = {handleNextCharacters} 
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle = {{ paddingBottom: 200 }}
                    renderItem = {({ item, index }) => <CharacterSummary character = {item} index = {index} handlePress = {handlePress} handlePressIcon = {handlePressIcon2}  isFavorite = {isFavorite} dataVariation={dataVariation} scrollY = {scrollY} />}
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