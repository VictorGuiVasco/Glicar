import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import api from '../../../services/api'

export default function InsertGlicemia({ route, navigation }) {
  const nav = useNavigation()

  const [glic, setGlic] = useState('')

  const { date, hours } = route.params;
  var user_id = 1

  async function handleRegister() {
    try {
      await api.post('/glicemia', { glic, date, hours, user_id})

      Alert.alert(
        'Sucesso',
        'Registro feito com sucesso',
        [
          { text: 'OK', onPress: () =>  { nav.navigate('Glicemia')} }
        ],
        { cancelable: false }
      )
    } catch (err) {
      return resp.status(400).json({ error: 'Unexpected error while creating new class.' });
    }
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Qual o nível</Text>
      <Text style={styles.text} >de glicemia?</Text>

      <TextInput
        style={styles.textInput}
        placeholder='Nível de Glicemia'
        placeholderTextColor='#777'
        keyboardType={'numeric'}

        onChangeText={(text) => { setGlic(text) }}
      />

      <TouchableOpacity style={styles.btn} onPress={() => { handleRegister() }}>
        <View>
          <Text style={styles.txtButton} >CONFIRMAR</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}