import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 35,
        backgroundColor: '#fff'
    },

    graficContainer: {
        flex: 1,
        width: '80%',
        paddingBottom: 20,
        justifyContent: 'space-between'
    },

    foodContainer: {
        width: '80%',
        height: '25%',
        borderWidth: 0.5,

        alignItems: 'center',
        justifyContent: 'center'
    },

    grafic: {
        height: '48%',
        borderWidth: 0.5,

        alignItems: 'center',
        justifyContent: 'center'
    },

    btn: {
        width: '70%',
        borderRadius: 5,

        padding: 12,
        height: 45,
        marginTop: 5,
        marginVertical: 15,

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
})