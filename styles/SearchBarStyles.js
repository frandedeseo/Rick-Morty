import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
    searchIcon: {
        width: 25, 
        height: 25,

    },
    cancelButton: {
        backgroundColor: 'white',
        color: 'rgb(94, 170, 249)',
        fontSize: 14,
        marginLeft: '5%',
        fontWeight: "bold",
    },

    cross: {
        width: 11, 
        height: 11,

    },
    /*
    searchBar__unclicked: {
        flexDirection: "row",
        width: "73%",
        backgroundColor: "#d9dbda",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        alignItems: "center",
    }, */
    searchBar: {
        flexDirection: "row",
        width: "56%",
        backgroundColor: "#d9dbda",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        alignItems: "center",
    },
    input: {
        fontSize: 15,
        marginLeft: 2,
        width: "70%",
    },
});