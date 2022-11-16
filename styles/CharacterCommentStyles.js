import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        marginHorizontal: '10%',
        marginTop: '10%',
        borderRadius: 20,
        backgroundColor: 'rgb(60, 62, 68)',
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: "column",
        height: 150
    },
    button: {
        backgroundColor: '#abd5ec',
        height: 35,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    buttonText: {
        fontSize: 18, 
        fontWeight: '500',
    },

    textContainer: {
        padding: 20,
        width: '80%',
        marginTop: 30,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#d9dbda",

    },
    text: {
        color: 'black',
        fontSize: 15,
    }
});