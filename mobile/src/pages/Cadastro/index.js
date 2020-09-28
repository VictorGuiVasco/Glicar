import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TextInput, Picker, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import styles from './styles'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native';

import Valida from '../../utils/validacao'

export default function Cadastro() {
  const nav = useNavigation();

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
                console.log(data)
                await api.post('/users', data)

                alert('Cadastro efeituado com sucesso')
                nav.navigate('Wellcome')
            } catch (err) {

                if (err.response) {
                    var error = err.response.data
                    alert(error.error);
                }
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
    const [dtnasc, setDtNasc] = useState('Data de nascimento')
    const [sexo, setSexo] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    const [show, setShow] = useState(false);

    const onChange = (event, date) => {
        setShow(Platform.OS === 'ios');
        setDtNasc(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' >
            <View style={styles.tituloContainer} >
                <Text style={styles.titulo} >CADASTRO</Text>
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

                <TouchableOpacity style={styles.textInput} onPress={() => { setShow(true); }}>
                    <View>
                        <Text style={styles.textDate} > {(dtnasc.toString())} </Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <Picker
                        selectedValue={sexo}
                        style={styles.pickerSexo}

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

                <TouchableOpacity style={styles.btnSingIn} onPress={() => { handleRegister() }}>
                    <View>
                        <Text style={styles.TextSingIn} >CADASTRAR</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {show && (
                <DateTimePicker
                    value={new Date()}
                    display="default"
                    onChange={onChange}
                />
            )}
        </KeyboardAvoidingView>
    );
}