// React
import { View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import { useState, useRef } from 'react';

// Styles
import { Styles } from '../styles/CharacterSummaryStyles';

const status = {
    "Alive": '#55cc44',
    "Dead": 'red',
    "unknown": '#9e9e9e'
}


//onPress = {() => handlePress(character)}
export default function CharacterSummary({ item: character, index, handlePress, icon, scrollY }){
    const [estado, setEstado] = useState(0);
    const anim = useRef(new Animated.Value(0)).current;

    const frontInterpolateRotating = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
      });
      const backInterpolateRotating = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '360deg'],
      });
    const inputRange = [
        -1,
        0,
        120 * index,
        120 * (index+1.5)
    ]

    const inputRangeInterpolate = [
        -1,
        0,
        120 * index,
        120 * (index+0.8)
    ]
    const setInputRange = () => {
        var inputRangeRotacion;
        if (index>2){
            inputRangeRotacion = [
                0,
                120 * (index-3),
                120 * (index-2),
                120 * (index-1),
                120 * (index)
            ]
        }else{
            inputRangeRotacion = [
                -1,
                -1,
                0,
                0,
                0,
            ]
        }
        return inputRangeRotacion
    }
    const setInputRangeBack = () => {
        var inputRangeRotacion;
        if (index>2){
            inputRangeRotacion = [
                0,
                120 * (index-3),
                120 * (index-2),
                120 * (index-1),
                120 * (index)
            ]
        }else{
            inputRangeRotacion = [
                -1,
                -1,
                0,
                0,
                0,
            ]
        }
        return inputRangeRotacion
    }
    const rotacion = scrollY.interpolate({
        inputRange: setInputRange(),
        outputRange: ['180deg', '180deg', '0deg' , '0deg', '0deg'],
    })
    const rotacionBack = scrollY.interpolate({
        inputRange: setInputRangeBack(),
        outputRange: ['0deg', '0deg', '180deg' , '180deg', '180deg'],
    })

    const scale = scrollY.interpolate({
        inputRange,
        outputRange: [1, 1, 1, 0]
    })

    const opacity = scrollY.interpolate({
        inputRange: inputRangeInterpolate,
        outputRange: [1, 1, 1, 0]
    })
    
    const tapar = () => {
        setEstado(1);
        Animated.spring(anim, {
            toValue: 1,
            friction: 8,
            tension: 8,
            useNativeDriver: false
        }).start();
    };
    
    const destapar = () => {
        setEstado(0);
        Animated.spring(anim, {
          toValue: 0,
          friction: 8,
          tension: 10,
          useNativeDriver: false
        }).start();
    };

    const frontAnimatedStyle = {
        backfaceVisibility: 'hidden',
        opacity,
        transform: [
          {scale//rotateY: frontInterpolateRotating,
          },{rotateY: rotacion}
        ]
      };
    const backAnimatedStyle = {
        backfaceVisibility: 'hidden',
        transform: [
            {
              rotateY: rotacionBack,
            },
        ],
    };

    return (
        <View style= {Styles.container}>
            
            <Animated.View style = {[Styles.front, frontAnimatedStyle]}>
                <TouchableOpacity onPress={estado ? destapar : tapar}>
                    <View style = {Styles.row}>
                        <Image style = {Styles.image} source = {{ uri: character.image }} />
                        
                        <View style = {Styles.info}>
                            <View style = {Styles.row}>
                                <Text style = {{ ...Styles.status, backgroundColor: status[character.status] }} />
                                <Text style = {Styles.name}> {character.name} </Text>

                                <TouchableOpacity style = {Styles.iconWrap}>
                                    <Image style = {Styles.icon} source = {icon} />
                                </TouchableOpacity>
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

            <Animated.View style = {[Styles.back, backAnimatedStyle]}>
                <TouchableOpacity onPress={estado ? destapar : tapar}>
                    <Image style = {{width: 50, height: 50}}  source = {require('../assets/backCard.jpg')}/>
                </TouchableOpacity>
            </Animated.View>
            
        </View>
    );
}






