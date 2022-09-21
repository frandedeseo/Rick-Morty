// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    inputHidden: {
        display: 'none',
        backgroundColor: 'red',
    },
    submitButton: {
        height: 10,
        backgroundColor: "red",
    },
    input: {
        position: 'absolute',
        top: 2,
        left: '34%',
        right: '4%',
        height: 36,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    text: {
      fontSize: 10,
    },
    textPicker: {
        marginVertical: 0,
        width: 100,
        padding: 0,
        borderWidth: 1,
        borderColor: "red",
      position: 'absolute',
      top: 0,
      left: 15,
      zIndex: 1000,
    },
    row: {
        flexDirection: 'row',
    },

    banner: {
        backgroundColor: 'white',
        height: 40,
    },

    bannerImage: {
        alignSelf: 'center',
        width: 135, 
        height: 35,
        marginLeft: 115
    },

    bannerText: {
        fontSize: 18
    },

    backButton: {
        position: 'absolute',
        top: 12,
        left: 312,
        justifyContent: 'center', 
    },
    moreActionsButton: {
        position: 'absolute',
        top: 40,
        left: 40,
        zIndex: 1000
    },
});