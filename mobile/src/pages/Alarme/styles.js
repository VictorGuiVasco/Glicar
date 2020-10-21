import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    dateTimeContainer: {
        alignItems: 'center'
    },

    textInput: {
        borderRadius: 5,

        width: '50%',
        height: 180,
        marginHorizontal: '7%',
        marginVertical: 7,

        backgroundColor: '#EBEBEB',
        color: '#333333',
        alignItems: 'center'
    },

    textDate: {
        borderRadius: 5,
        fontSize: 20,

        paddingVertical: 3,
        textAlign: "center",

        color: '#fff',
        backgroundColor: '#7A63FF'
    },

    textDay: {
        fontSize: 100,
        paddingVertical: 3,
        color: '#42AEFF',
    },

    text: {
        fontSize: 20,
        marginVertical: 8,
        color: '#42AEFF',
    },

    btn: {
        width: '70%',
        borderRadius: 5,

        padding: 12,
        height: 45,
        marginTop: 50,
        marginVertical: 8,

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

    txtButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',

        alignItems: 'center',
        justifyContent: 'center',
    },
})