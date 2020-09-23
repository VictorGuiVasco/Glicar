import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants'

export default function Senha() {

    async function handleRequestPassword() {
        console.log(email)

        try {
            const response = await api.post('/password', email)

            console.log(response.data)

        } catch (err) {
            if (err.response) {
                var error = err.response.data
                alert(error.error);
            }
        }
    }

const [email, setEmail] = useState('')

return (
    <View style={styles.container}>

        <View style={styles.imageView} >
            <Image
                source={require('../../assets/senha.png')}
                style={styles.logo}
            />
        </View>

        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Email"

                keyboardType={'email-address'}
                onChangeText={(text) => setEmail(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => handleRequestPassword()} >
                <View style={styles.btnSenha} >
                    <Text style={styles.btnText}>Enviar</Text>
                </View>
            </TouchableOpacity>
        </View>

    </View>

);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#fff'
    },

    imageView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },

    textInput: {
        borderRadius: 5,

        padding: 12,
        height: 50,
        marginHorizontal: 30,
        marginVertical: 5,

        fontSize: 15,

        backgroundColor: '#EBEBEB',
        color: '#333333',
    },

    button: {
        borderRadius: 5,

        padding: 12,
        height: 48,
        marginHorizontal: 30,
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
    },

    btnText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,

        fontWeight: 'bold',
        color: '#333'
    },
});
