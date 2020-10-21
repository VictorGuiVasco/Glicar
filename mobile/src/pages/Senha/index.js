import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

import api from '../../services/api'

export default function Senha() {

  async function handleRequestPassword() {

    try {
      const response = await api.post('/password', email)

      alert(response.data)

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

          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          placeholderTextColor='#777'

          onChangeText={(text) => setEmail(text)}
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

