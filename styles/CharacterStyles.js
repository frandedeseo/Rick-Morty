// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#3c3e44",
        display: 'flex',
        justifyContent: 'space-between',
        marginHorizontal: '14%',
        marginTop: '5%',
        borderRadius: 20,
    },

    image: {
        width: '100%',
        height: '35%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    data: {
        marginLeft: 10
    },

    row: {
        flexDirection: 'row',
    },

    genderRow: {
        flexDirection: 'row',
        marginTop: 10
    },

    
    name: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    
    status: {
        alignSelf: 'center',
        borderRadius: 10,
        height: 12,
        width: 12,
        marginRight: 9,
        marginLeft: 4
    },
    
    text: {
        color: '#f5f5f5',
        fontSize: 18
    },

    greyText: {
        marginTop: 10,
        color: '#9e9e9e',
        fontSize: 18
    },

    infoText: {
        fontSize: 22,
        marginBottom: 10
    },

    button: {
        backgroundColor: '#abd5ec',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    buttonText: {
        fontSize: 18, 
        fontWeight: '500'
    },

    line: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        marginTop: 5,
        marginRight: 15,
        marginLeft: 5
    },

    genderImage: {
        width: 20, 
        height: 20, 
        alignSelf: 'center',
        marginRight: 3
    }
})