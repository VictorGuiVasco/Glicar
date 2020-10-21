import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 45,
        backgroundColor: '#fff',
    },

    tituloContainer: {
        marginHorizontal: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
    },

    logoIcon: {
        width: 80,
        height: 80
    },

    inputView: {
        paddingVertical: '20%',
    },

    textInput: {
        borderRadius: 5,

        padding: 12,
        height: 50,
        marginHorizontal: '7%',
        marginVertical: 7,

        fontSize: 15,

        backgroundColor: '#EBEBEB',
        color: '#333333',
    },

    textDate: {
        paddingVertical: 3,
        color: '#777'
    },

    signUpView: {
        height: '15%',
        marginTop: 5
    },

    btnSignUp: {
        borderRadius: 5,

        padding: 15,
        height: 50,
        marginHorizontal: '7%',
        marginVertical: 0,

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

    TextSignUp: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,

        fontWeight: 'bold',
        color: '#fff'
    },

    pickerSexo: {
        borderWidth: 0.1,
        borderRadius: 5,

        padding: 12,
        height: 50,
        marginVertical: 7,
        marginHorizontal: '7%',

        fontSize: 15,

        color: '#333333',
        backgroundColor: '#EBEBEB',
    },

    date: {
        backgroundColor: '#EBEBEB',
        color: '#333333',
        borderWidth: 0,

        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: '7%',
        height: 50,

    }
})