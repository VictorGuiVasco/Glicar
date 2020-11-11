import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import api from '../../services/api'

export default function Senha() {
  const nav = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  async function handleRequestPassword() {
    const data = {
      email,
      password
    }

    if(confirm != password)
      return alert('Senhas diferentes')

    try {
      await api.post('/password', data)

      Alert.alert(
        'Sucesso',
        'Registro feito com sucesso',
        [
          { text: 'OK', onPress: () =>  { nav.navigate('Login')} }
        ],
        { cancelable: false }
      )
      
    } catch (err) {
      if (err.response) {
        var error = err.response.data
        alert(error.error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView} >
        <Text style={styles.titulo} >Recuperar Senha</Text>
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType={'email-address'}
          placeholderTextColor='#777'

          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Nova senha"
          secureTextEntry={true}
          placeholderTextColor='#777'

          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          placeholderTextColor='#777'

          onChangeText={(text) => setConfirm(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleRequestPassword()} >
          <View style={styles.btnSenha} >
            <Text style={styles.btnText}>Atualizar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
}

