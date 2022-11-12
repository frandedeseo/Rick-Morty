// React
import { Image, Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { Styles } from '../styles/AnimatedHeartStyles';
const WINDOW_HEIGHT = 1000;
const getRandomSignedNumber = () => (Math.random() < 0.5 ? -1 : 1);

const getRandomXOutput = () => {
    return getRandomSignedNumber() < 0 
    ? -Math.random() * WINDOW_HEIGHT * 0.7 
    : Math.random() * 10
}
const getRandomRotateOutput = () => {
    return [getRandomSignedNumber() < 0 ? '-60deg' : '60deg', '0deg'];
}

export default function AnimatedHeart(){
    const animatedValueY = useRef(new Animated.Value(0)).current;
    const randomXOutput = useRef(getRandomXOutput()).current;
    const randomRotateOutput = useRef(getRandomRotateOutput()).current;

    useEffect(() => {
        Animated.timing(animatedValueY, {
            toValue: -WINDOW_HEIGHT,
            duration: 3000,
            useNativeDriver: true
        }).start();   
    }, [animatedValueY]);

    return (
        <Animated.Image
            source = {require('../assets/animatedHeart.png')}
            style = {[
                Styles.heartIcon, 
                {
                    transform: [
                        {
                            translateX: animatedValueY.interpolate({
                                inputRange: [-WINDOW_HEIGHT, 0],
                                outputRange: [randomXOutput, 0],
                            }),
                        },
                        {
                            translateY: animatedValueY.interpolate({
                                inputRange: [-WINDOW_HEIGHT, -17, 0],
                                outputRange: [-WINDOW_HEIGHT, -50, 0],
                            }),
                        },
                        {
                            rotate: animatedValueY.interpolate({
                                inputRange: [-WINDOW_HEIGHT, 0],
                                outputRange: randomRotateOutput,
                            }),
                        },
                        {
                            scale: animatedValueY.interpolate({
                                inputRange: [-50, 0],
                                outputRange: [1, 0.5],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                    opacity: animatedValueY.interpolate({
                        inputRange: [-WINDOW_HEIGHT * 0.7, 0],
                        outputRange: [0, 1]
                    }),
                },
            ]}
        />
    );
};