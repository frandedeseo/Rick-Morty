// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        margin: 6,
        borderRadius: 10
    },

    front: {
        //backgroundColor: 'rgb(64,44,56)',
        start: 0,
        borderRadius: 10,
        backgroundColor: 'rgb(60, 62, 68)',
        top: 0,
        width: '100%',
        elevation: 100,
    },
    
    back: {
        elevation: 100,
        //backgroundColor: 'rgb(64,44,56)',
        position: 'absolute',
        borderRadius: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        top: 0,

    },

    image: {
        width: 110, 
        height: '100%', 
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    genderImage: {
        width: 20, 
        height: 20, 
        alignSelf: 'center',
        marginRight: 3
    },

    row: {
        flexDirection: 'row',
        width: '100%',
    },

    info: {
        margin: 5,
        flex: 1
    },

    status: { 
        borderRadius: 10, 
        height: 10,
        width: 10, 
        alignSelf: 'center'
    },

    name: {
        color: '#f5f5f5',
        fontSize: 20
    },

    text1: {
        color: '#f5f5f5',
        fontSize: 15,
    },
    text2: {
        color: '#f5f5f5',
        fontSize: 15,
        width: 150,
    },

    type: {
        color: '#9e9e9e',
        fontSize: 14,
        marginLeft: 5,
        marginTop: 15
    },

    line: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        marginTop: 5
    },

    icon: {
        width: 15,
        height: 15,
    },

    iconWrap: { 
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: '3%' 
    }
})