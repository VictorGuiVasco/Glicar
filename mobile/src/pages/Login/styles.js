import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#fff',
        justifyContent: 'space-around'
    },

    logo: {
        width: 220,
        height: 220
    },

    imageView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputView: {
        marginHorizontal: 30,
    },

    textInput: {
        borderRadius: 5,

        padding: 12,
        height: 50,
        marginVertical: 5,

        fontSize: 15,

        backgroundColor: '#EBEBEB',
        color: '#333333',
    },

    signInView: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    btnSingIn: {
        borderRadius: 5,

        padding: 15,
        height: 50,
        marginVertical: 5,

        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#42aeff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    TextSingIn: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,

        fontWeight: 'bold',
        color: '#FFF'
    },

    button: {
        height: 30,
        marginVertical: 5
    },

    btnSenha: {
        flex: 1,
        justifyContent: 'center',
    },

    btnText: {
        fontSize: 14,
        fontWeight: 'bold',

        color: '#808080'
    },
})