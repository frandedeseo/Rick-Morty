// React
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import AnimatedHeart from '../components/AnimatedHeart';

// Styles
import { Styles } from '../styles/CharacterSummaryStyles';

// Redux
import { useDispatch } from 'react-redux';
import { set_character } from '../redux/reducers/onlyCharacterSlice';
import { set_modal_visibility } from '../redux/reducers/characterModalSlice';
import { add_to_history } from '../redux/historySlice';

// Firebase
import { database } from '../firebase/config';
import { ref, remove, set, onChildAdded, onChildRemoved } from 'firebase/database';

const status = {
    "Alive": '#55cc44',
    "Dead": 'red',
    "unknown": '#9e9e9e'
}

export default function CharacterSummary({ character, index, scrollY }){
    const [isFavorite, setIsFavorite] = useState(false);
    const [hearts, setHearts] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const charactersRef = ref(database, 'favoriteCharacters/');

        onChildAdded(charactersRef, (char) => {
            if (char.val().character.id==character.id){
                setIsFavorite(true);
            }
        })

        onChildRemoved(charactersRef, (char) => {
            if (char.val().character.id==character.id){
                setIsFavorite(false);
            }
        })
    }, [])

    const interpolacion = () => {
        var input;
        if (index>3){
            input = [0, 120 * ((index)-3.6), 120 * ((index)-2), 120 * index, 120 * (index+0.6), 120 * (index+1.5)]
        }else{
            input = [ -1, -1, -1, 120 * index, 120 * (index+0.6), 120 * (index+1.5)]
        }
        return input;
    }
    const removeCharacterFromFavorites = () => {
        remove(ref(database, 'favoriteCharacters/' + character.id));
        dispatch(add_to_history(character.name + ' fue removido de favoritos'));
    }

    const addCharacterToFavorites = () => {
        set(ref(database, 'favoriteCharacters/' + character.id), {
            character: character
        });
        dispatch(add_to_history(character.name + ' fue agregado a favoritos'));
    }

    const pressHeart = () => {
        heartAnimation();
        addCharacterToFavorites(character);
    }

    const unpressHeart = () => {
        removeCharacterFromFavorites(character);
    }

    const handlePress = () => {
        dispatch(set_modal_visibility(true));
        dispatch(set_character(character));
    }

    const heartAnimation = () => {
        setHearts(true);
        setTimeout(() => { setHearts(false) }, 1500);
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
            <TouchableOpacity onPress = {() => handlePress()}>
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
                            <Text style = {Styles.text}>{character.gender} </Text>
                            <Text style = {Styles.text}>{character.species}</Text>
                        </View>
                        
                        {character.type && <Text style = {Styles.type}>{character.type}</Text>}
                        {!character.type && <Text style = {Styles.type}>{'Normal ' + character.species}</Text>}
                    </View>
                </View>
            </TouchableOpacity>
            {hearts == true && (
                <>
                <AnimatedHeart/>
                <AnimatedHeart/>
                <AnimatedHeart/>
                <AnimatedHeart/>
                </>
            )}
        </Animated.View>
    );
}






