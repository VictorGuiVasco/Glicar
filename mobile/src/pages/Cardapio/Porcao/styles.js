import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 35,
        backgroundColor: '#fff',

        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    food: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#7A63FF'
    },

    porcaoContainer: {
        width: '100%',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    btn: {
        borderRadius: 5,

        width: 50,
        height: 48,
        padding: 15,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        shadowColor: "#000",
        backgroundColor: '#fff'
    },

    btnAvancar: {
        width: '70%',
        borderRadius: 5,

        padding: 15,
        height: 50,
        marginTop: 5,
        marginVertical: 8,

        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#42AEFF',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    }
})