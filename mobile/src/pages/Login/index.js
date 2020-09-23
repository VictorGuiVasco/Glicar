import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import styles from './styles'

export default function Login() {
  const nav = useNavigation();

  const [email, setEmail] = useState('')
  const [senha, setPassword] = useState('')

  //Enviar email e senha pro backend
  async function handleSignIn() {

    const data = {
      email,
      senha
    }

    try {
      const response = await api.post('/logon', data)

      console.log(response.data)

    } catch (err) {
      if (err.response) {
        var error = err.response.data
        alert(error.error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/login.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputView} >
        <View>
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
        </View>

        <TouchableOpacity style={styles.btnSingIn} onPress={() => { nav.navigate('Home') }} >
          <View>
            <Text style={styles.TextSingIn} >LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { nav.navigate('Senha') }} >
          <View style={styles.btnSenha} >
            <Text style={styles.btnText} >Esqueci minha senha</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
