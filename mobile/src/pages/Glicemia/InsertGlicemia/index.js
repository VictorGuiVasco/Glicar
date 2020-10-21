import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function InsertGlicemia() {
  const nav = useNavigation()

  function handleRegister() {
    alert('Glicemia Registrada com sucesso')
    nav.navigate('Glicemia')
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

        onChangeText={() => { }}
      />

      <TouchableOpacity style={styles.btn} onPress={() => { handleRegister() }}>
        <View>
          <Text style={styles.txtButton} >CONFIRMAR</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}