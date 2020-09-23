import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Picker, KeyboardAvoidingView } from 'react-native';

import Valida from '../../utils/validacao'

import api from '../../services/api'

import DatePicker from 'react-native-datepicker'
import Constants from 'expo-constants'

export default function Cadastro() {

    async function handleRegister() {

        const data = {
            name,
            email,
            password,
            dtnasc,
            sexo,
            peso,
            altura
        }

        if (Valida(data)) {
            try {
                await api.post('/users', data)

                console.log('oie certo')
            } catch (err) {
                console.log(err)
            }
        } else {
            alert('Preencha os campos corretamente')
        }
    }

    const sexos = [
        { key: 0, name: 'Sexo' },
        { key: 1, name: 'Masculino' },
        { key: 2, name: 'Feminino' }
    ]
    let sexoItem = sexos.map((v, k) => {
        return <Picker.Item key={k} value={k} label={v.name} />
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dtnasc, setDtNasc] = useState('')
    const [sexo, setSexo] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' >
            <View style={styles.imageView} >
                <Image
                    source={require('../../assets/login.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Nome"}
                    placeholderTextColor='#777'

                    onChangeText={(text) => setName(text)}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder={"email"}
                    placeholderTextColor='#777'

                    keyboardType={'email-address'}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder={"senha"}
                    placeholderTextColor='#777'

                    onChangeText={(text) => setPassword(text)}
                />

                <DatePicker
                    style={styles.date}
                    placeholder="Data de Nascimento"
                    showIcon={false}



                    mode="date"
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"

                    date={dtnasc}
                    onDateChange={(item) => { setDtNasc(item) }}
                />

                <View>
                    <Picker
                        selectedValue={sexo}
                        style={styles.pickerSexo}
                        placeholderTextColor='#777'

                        onValueChange={(item, index) => setSexo(item)}
                    >
                        {sexoItem}
                    </Picker>
                </View>

                <TextInput
                    keyboardType={'numeric'}
                    style={styles.textInput}
                    placeholder={"peso"}
                    placeholderTextColor='#777'

                    onChangeText={(text) => setPeso(text)}
                />

                <TextInput
                    keyboardType={'numeric'}
                    style={styles.textInput}
                    placeholder={"altura"}
                    placeholderTextColor='#777'

                    onChangeText={(text) => setAltura(text)}
                />

                <TouchableOpacity style={styles.btnSingIn} onPress={() => handleRegister()}>
                    <View>
                        <Text style={styles.TextSingIn} >CADASTRAR</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: '#fff'
    },

    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    logo: {
        width: 100,
        height: 100
    },

    inputView: {
        marginTop: 15,
        flex: 2
    },

    textInput: {
        borderWidth: 0.1,
        borderRadius: 5,

        padding: 12,
        height: 50,
        marginHorizontal: 30,
        marginVertical: 5,

        fontSize: 15,

        backgroundColor: '#EBEBEB',
        color: '#333333',
    },

    btnSingIn: {
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

    TextSingIn: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,

        fontWeight: 'bold',
        color: '#333'
    },

    pickerSexo: {
        borderRadius: 5,

        padding: 12,
        height: 50,
        marginHorizontal: 30,
        marginVertical: 5,

        fontSize: 15,

        backgroundColor: '#EBEBEB',
        color: '#333333',
    },

    date: {
        backgroundColor: '#EBEBEB',
        color: '#333333',

        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 30,
        height: 40,
        width: 350

    }
})  