import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: '3%',
        marginTop: '10%',
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        height: 150
    },

    cancelButton: {
        color: 'rgb(94, 170, 249)',
        paddingHorizontal: '1%',
        fontWeight: "bold",
        fontSize: 14,
    },

    cross: {
        width: 13, 
        height: 13,
        marginHorizontal: 5
    },

    searchBar: {
        flexDirection: "row",
        width: "72%",
        height: '60%',
        backgroundColor: "#d9dbda",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgb(153, 155, 154)',
        marginLeft: 50,
        alignItems: "center",
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
        alignSelf: 'flex-start',
        width: "84%",
        multiline: 'true'
    },
    sendIcon: {
        width: 32, 
        height: 32,
        marginRight: 40,
        marginTop: 3,
    }
});