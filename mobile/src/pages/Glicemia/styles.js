import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 35,
        backgroundColor: '#fff'
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    text: {
        fontSize: 18,
        marginBottom: 8,
    },

    tituloContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    glicContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
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
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,

        fontWeight: 'bold',
        color: '#333'
    },
})