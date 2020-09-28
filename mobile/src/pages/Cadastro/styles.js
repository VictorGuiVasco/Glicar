import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 35,
        backgroundColor: '#fff'
    },

    tituloContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },

    inputView: {
        flex: 5,
        justifyContent: 'center'
    },

    textInput: {
        borderWidth: 0.1,
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

    btnSingIn: {
        borderRadius: 5,

        padding: 12,
        height: 48,
        marginHorizontal: '7%',
        marginVertical: 7,

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

    TextSingIn: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,

        fontWeight: 'bold',
        color: '#333'
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