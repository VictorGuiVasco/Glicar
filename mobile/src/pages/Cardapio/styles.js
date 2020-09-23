import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#fff'
    },

    containerLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 100,
        height: 100
    },

    input: {
        backgroundColor: '#EBEBEB',
        width: '80%',
        marginBottom: 15,
        color: '#333333',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 5,

        borderColor: '#222',
    },

    pratoContainer: {
        flex: 1,
        marginHorizontal: 30,
        marginBottom: 30,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#e7e7e7',
    },
    
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 5,
    },

    pratos: {
        flex: 1
    },

    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginHorizontal: 5,
        marginBottom: 5
    },

    btnPratos: {
        borderRadius: 5,

        padding: 12,
        height: 45,
        marginVertical: 5,

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
    }

})