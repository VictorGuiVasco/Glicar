import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TextInput, Picker, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

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
        await api.post('/users', data)

        Alert.alert(
          'Sucesso',
          'Registro feito com sucesso',
          [
            { text: 'OK', onPress: () =>  { nav.navigate('Wellcome')} }
          ],
          { cancelable: false }
        )
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
    setDtNasc(date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear());
  };

  return (
    <View style={styles.container}  >
      <View style={styles.tituloContainer} >
        <Text style={styles.titulo} >CADASTRO</Text>
        <Image
          source={require('../../assets/logoIcon.png')}
          style={styles.logoIcon}
        />
      </View>

      <ScrollView style={styles.inputView} behavior={'padding'} /* showsVerticalScrollIndicator={false} */>
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
      </ScrollView >

      <View style={styles.signUpView} >
        <TouchableOpacity style={styles.btnSignUp} onPress={() => { handleRegister() }}>
          <View>
            <Text style={styles.TextSignUp} >CADASTRAR</Text>
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
    </View>
  );
}