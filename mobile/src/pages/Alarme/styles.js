import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 18,
        marginBottom: 8,
        textDecorationLine: 'underline'
    },

    btn: {
        width: '70%',
        borderRadius: 5,

        padding: 12,
        height: 45,
        marginTop: 5,
        marginVertical: 8,

        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    txtButton: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold',

        alignItems: 'center',
        justifyContent: 'center',
    },
})