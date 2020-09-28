import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        alignItems: 'center',
    },

    inputContainer: {
        borderRadius: 5,

        width: '85%',
        height: 50,
        padding: 12,
        marginVertical: 8,

        fontSize: 15,

        backgroundColor: '#EBEBEB',
        color: '#333333',

        flexDirection: 'row',
        alignItems: 'center',
    },

    textInput: {
        height: 50,
        padding: 12,
        marginVertical: 8,

        fontSize: 15,

        backgroundColor: '#EBEBEB',
        color: '#333333',
    },

    alimentsContainer: {
        flex: 1,
        borderWidth: 0.5,
        backgroundColor: '#eee',

        width: '85%',
        marginBottom: 8,

        alignItems: 'center',
        justifyContent: 'center'
    },

    footer: {
        height: 100,
        width: '100%',

        backgroundColor: '#42A5FF',

        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    footerChild: {
        alignItems: 'center'
    },

    footerTitle: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline'
    },

    btn: {
        borderRadius: 5,
    
        width: 48,
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
    }


})