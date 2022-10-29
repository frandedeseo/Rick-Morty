import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
    searchIcon: {
        width: 20, 
        height: 20,
        marginLeft: '2%'

    },
    cancelButton: {
        backgroundColor: 'white',
        color: 'rgb(94, 170, 249)',
        marginLeft: '3%',
        fontWeight: "bold",
        fontSize: 14,
    },

    cross: {
        width: 11, 
        height: 11,

    },

    searchBar: {
        flexDirection: "row",
        width: "65%",
        backgroundColor: "#d9dbda",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        alignItems: "center",
    },
    input: {
        fontSize: 15,
        marginLeft: 2,
        width: "75%",
    },
});