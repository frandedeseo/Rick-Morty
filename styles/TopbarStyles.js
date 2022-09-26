// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    row: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
    },
    
    banner: {
        backgroundColor: 'white',
        height: 40,
    },

    bannerImage: {
        width: '36%',
        height: 35,
        alignSelf: 'center',
    },
    searchButton: {
        position: 'absolute',
        left: '86%',
        top: 6,
    },
    searchIcon: {
        width: 32, 
        height: 32,
    },
});