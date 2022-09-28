// React
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

export const Styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        height: 36,
        width: '55%',
        paddingLeft: '2%',
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: 'auto',
    },

    plusButton: {
        alignSelf: 'center',
    },

    plusIcon: {
        width: 34, 
        height: 34,
    },

    filterText: {
        width: '24%',
        alignSelf: 'center',
    },

    filterStatus: {
        width: 100,
        alignSelf: 'center',
    },

    filterGender: {
        width: 110,
        alignSelf: 'center',
    },

    pickers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%', 
    },

    sendButton: {
        position: 'absolute',
        left: '82%',
        top: 8,
    },

    sendIcon: {
        width: 25, 
        height: 25,
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
        backgroundColor: 'white',
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
        backgroundColor: "rgb(235,235,235)",
        height: '21%',
        marginHorizontal: '16%',
        marginTop: '13%',
        borderRadius: 20,
    },
});