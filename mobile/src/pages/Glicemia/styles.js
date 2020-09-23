import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 25,
        backgroundColor: '#fff'
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    text: {
        fontSize: 18
    },

    glicContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    glicose: {
        width: '50%',
        borderRadius: 5,

        padding: 12,
        height: 45,
        marginTop: 5,
        marginBottom: 10,

        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#ebebeb',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    
    tempo: {

        textAlign: 'center',
        width: '50%',
        borderRadius: 5,

        padding: 12,
        height: 45,
        marginVertical: 5,

        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#ebebeb',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})