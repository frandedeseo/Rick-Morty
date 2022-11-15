// React
import { View, Text, Image, TouchableOpacity, Animated, LayoutAnimation, UIManager} from 'react-native';

// Styles
import { Styles } from '../styles/CharacterSummaryStyles';

// Redux
import { useDispatch } from 'react-redux';
import { set_character } from '../redux/reducers/onlyCharacterSlice';
import { set_modal_visibility } from '../redux/reducers/characterModalSlice';
import { set_comment_modal_visibility } from '../redux/reducers/commentModalSlice';

const status = {
    "Alive": '#55cc44',
    "Dead": 'red',
    "unknown": '#9e9e9e'
}

if ( 
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const layoutAnimConfig = {
    duration: 400,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut, 
    },
    delete: {
      duration: 200,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
};


//
export default function FavoriteCharacterSummary({ character, index, scrollY, handlePressIcon }){
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(set_modal_visibility(true));
        dispatch(set_character(character));
    }

    const handlePressComment = () => {
        dispatch(set_comment_modal_visibility(true));
        dispatch(set_character(character));
    }

    const removeFromFavorite = () => { 
        LayoutAnimation.configureNext(layoutAnimConfig);
        handlePressIcon(character);
    };

    const interpolacion = () => {
        var input;
        if (index>3){
            input = [0, 120 * ((index)-3.6), 120 * ((index)-2), 120 * index, 120 * (index+0.6), 120 * (index+1.5)]
        }else{
            input = [ -1, -1, -1, 120 * index, 120 * (index+0.6), 120 * (index+1.5)]
        }
        return input;
    }
    
    const scale = scrollY.interpolate({
        inputRange: interpolacion(),
        outputRange: [0, 0.7, 1, 1, 0.6, 0]
    });
    
    const opacity = scrollY.interpolate({
        inputRange: interpolacion(),
        outputRange: [0, 0, 1, 1, 0, 0]
    });

    return (
        <Animated.View style= {[Styles.container, {opacity}, {transform: [{scale}]}]}>
            <TouchableOpacity onPress = {() => handlePress()}>
                <View style = {Styles.row}>
                    <Image style = {Styles.image} source = {{ uri: character.image }} />
                    
                    <View style = {Styles.info}>
                        <View style = {Styles.row}>
                            <Text style = {{ ...Styles.status, backgroundColor: status[character.status] }} />
                            <Text style = {Styles.name}> {character.name} </Text>

                            <TouchableOpacity style = {Styles.iconWrap} onPress = {() => removeFromFavorite()}>
                                <Image style = {Styles.icon} source = {require('../assets/favoritesCharacter.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style = {Styles.line} />

                        <View style = {Styles.row}>
                            {character.gender === 'Male' && <Image style = {Styles.genderImage} source = {require('../assets/Male.png')} />}
                            {character.gender === 'Female' && <Image style = {Styles.genderImage} source = {require('../assets/Female.png')} />}
                            {character.gender === 'unknown' && <Image style = {Styles.genderImage} source = {require('../assets/unknown.png')} />}
                            
                            <Text style = {Styles.text}>{character.gender} </Text>
                            <Text style = {Styles.text}>{character.species}</Text>
                            
                            <TouchableOpacity style = {Styles.iconWrap} onPress= {() => handlePressComment(character)}>
                                <Image 
                                    style = {Styles.add_comment_icon} 
                                    source = {require('../assets/add_comment.png')}
                                />
                            </TouchableOpacity>
                            
                            <TouchableOpacity style = {Styles.iconWrap}>
                                <Image 
                                    style = {Styles.show_comment_icon} 
                                    source = {require('../assets/show_comment.png')}
                                />
                            </TouchableOpacity>
                            
                        </View>
                        
                        {character.type && <Text style = {Styles.type}>{character.type}</Text>}
                        {!character.type && <Text style = {Styles.type}>{'Normal ' + character.species}</Text>}
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
}






