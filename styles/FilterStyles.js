// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    /*
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        height: 36,
        width: '55%',
        paddingLeft: '2%',
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: 'auto',
    }, */
    plusButton: {
        alignSelf: 'center',
        marginLeft: '6%',
    },

    plusIcon: {
        width: 34, 
        height: 34,
    },
    substractIcon: {
        width: 24, 
        height: 24,
        margin: 5,
    },

    filterText: {
        width: '24%',
        borderRightColor: 'black',
        borderRightWidth: 1,
        alignSelf: 'center',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },

    filterStatus: {
        width: 100,
        alignSelf: 'center',
        borderRadius: 5,
    },

    filterGender: {
        width: 110,
        alignSelf: 'center',
        borderRadius: 5,
    },

    pickers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '1%',
    },

    sendButton: {
        position: 'absolute',
        left: '89%',
        top: 6,
    },

    sendIcon: {
        width: 30, 
        height: 30,
    },

    cancelButton: {
        alignSelf: 'center',
        width: '10%',
    },

    cancelIcon: {
        width: 25, 
        height: 25, 
        marginLeft: '10%',
    },
    
    row: {
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },

    button: {
        backgroundColor: '#abd5ec',
        height: 35,
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: -1,
    },

    modalView: {
        position: 'absolute',
        borderTopWidth: 2,
        borderColor: "#d9dbda",
        left: '2%',
        zIndex: -1,
        backgroundColor: "white",
        height: '100%',
        width: '96%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});