// React
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        margin: 6,
        borderRadius: 10,
        borderRadius: 10,
        backgroundColor: 'rgb(60, 62, 68)',
        width: '95%',
        elevation: 10,
    },
    moveLeft: {
        position: 'absolute',
        left: 100,
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

    text: {
        color: '#f5f5f5',
        fontSize: 15,
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

    show_comment_icon: {
        width: 20,
        height: 20
    },

    add_comment_icon: {
        width: 23,
        height: 23
    },

    iconWrap: { 
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: '3%' 
    }
})