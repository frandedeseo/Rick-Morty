// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    plusButton: {
        alignSelf: 'center',
        //marginRight: '2%'
    },

    plusIcon: {
        width: 30, 
        height: 30,
        marginTop: 2
    },

    substractIcon: {
        width: 20, 
        height: 20,
        margin: 5,
    },

    filterText: {
        width: '25%',
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
        width: '100%'
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
        //alignContent: 'center',
        //justifyContent: 'center',
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
        zIndex: -1,
        backgroundColor: "white",
        height: '100%',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    line: {
        borderRightColor: 'black',
        borderRightWidth: StyleSheet.hairlineWidth,
        marginBottom: 8,
        marginTop: 8,
    },
});