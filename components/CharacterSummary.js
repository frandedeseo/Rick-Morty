// React
import { View, Text, Image, TouchableOpacity, Animated, LayoutAnimation, UIManager} from 'react-native';
import { useState, useRef } from 'react';

// Styles
import { Styles } from '../styles/CharacterSummaryStyles';

const status = {
    "Alive": '#55cc44',
    "Dead": 'red',
    "unknown": '#9e9e9e'
}

export default function CharacterSummary({ character, index, handlePress, favorite, scrollY, addCharacterToFavorites, removeCharacterFromFavorites }){
    
    const [isFavorite, setIsFavorite] = useState(favorite);

    const interpolacion = () => {
        var input;
        if (index>3){
            input = [0, 120 * ((index)-3.6), 120 * ((index)-2), 120 * index, 120 * (index+0.6), 120 * (index+1.5)]
        }else{
            input = [ -1, -1, -1, 120 * index, 120 * (index+0.6), 120 * (index+1.5)]
        }
        return input;
    }
    const pressHeart = () => {
        setIsFavorite(true);
        addCharacterToFavorites(character);
    }

    const unpressHeart = () => {
        setIsFavorite(false);
        removeCharacterFromFavorites(character);
    }

    const scale = scrollY.interpolate({
        inputRange: interpolacion(),
        outputRange: [0, 0.7, 1, 1, 0.6, 0]
    })

    const opacity = scrollY.interpolate({
        inputRange: interpolacion(),
        outputRange: [0, 0, 1, 1, 0, 0]
    })

    return (
        <Animated.View style= {[Styles.container, {opacity}, {transform: [{scale}]}]}>
            <TouchableOpacity onPress = {() => handlePress(character)}>
                <View style = {Styles.row}>
                    <Image style = {Styles.image} source = {{ uri: character.image }} />
                    
                    <View style = {Styles.info}>
                        <View style = {Styles.row}>
                            <Text style = {{ ...Styles.status, backgroundColor: status[character.status] }} />
                            <Text style = {Styles.name}> {character.name} </Text>

                            {!isFavorite && (
                                <TouchableOpacity style = {Styles.iconWrap} onPress = {() => pressHeart()}>
                                    <Image style = {Styles.icon} source = {require('../assets/favoritesCharacter_unfocused.png')} />
                                </TouchableOpacity>
                            )}
                            {isFavorite && (
                                <TouchableOpacity style = {Styles.iconWrap} onPress = {() => unpressHeart()}>
                                    <Image style = {Styles.icon} source = {require('../assets/favoritesCharacter.png')} />
                                </TouchableOpacity>
                            )}
                        </View>

                        <View style = {Styles.line} />

                        <View style = {Styles.row}>
                            {character.gender === 'Male' && <Image style = {Styles.genderImage} source = {require('../assets/Male.png')} />}
                            {character.gender === 'Female' && <Image style = {Styles.genderImage} source = {require('../assets/Female.png')} />}
                            {character.gender === 'unknown' && <Image style = {Styles.genderImage} source = {require('../assets/unknown.png')} />}
                            <Text style = {Styles.text1}>{character.gender} </Text>
                            <Text style = {Styles.text2}>{character.species}</Text>
                        </View>
                        
                        {character.type && <Text style = {Styles.type}>{character.type}</Text>}
                        {!character.type && <Text style = {Styles.type}>{'Normal ' + character.species}</Text>}
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
}






