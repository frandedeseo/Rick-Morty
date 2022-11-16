import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        marginHorizontal: '3%',
        marginTop: '10%',
        borderRadius: 20,
        backgroundColor: 'rgb(60, 62, 68)',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        height: 150
    },
    button: {
        backgroundColor: '#abd5ec',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    buttonText: {
        fontSize: 18, 
        fontWeight: '500'
    },
});