import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight + 35,

        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 18,
    },

    textInput: {
        borderWidth: 0.1,
        borderRadius: 5,

        padding: 12,
        height: 50,
        
        width: '70%',
        marginTop: 10,
        marginVertical: 7,

        fontSize: 15,

        color: '#333333',
        backgroundColor: '#EBEBEB',
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