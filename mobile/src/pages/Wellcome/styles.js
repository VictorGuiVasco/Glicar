import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#FFF',
        justifyContent: 'space-around'
    },

    imageView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 220,
        height: 220
    },

    buttonView: {
        height: 50,

        justifyContent: 'center',
        alignItems: 'stretch',
    },

    signInButton: {
        borderRadius: 5,

        padding: 15,
        height: 50,
        marginBottom: 10,
        marginHorizontal: 30,

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

    signUpButton: {
        borderRadius: 5,

        padding: 15,
        height: 50,
        marginBottom: 10,
        marginHorizontal: 30,

        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#7A63FF',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,

        fontWeight: 'bold',
        color: '#FFF'
    },
})