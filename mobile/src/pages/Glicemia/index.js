import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Glicemia() {
  const nav = useNavigation();

  const[data, setData] = useState(new Date().toLocaleDateString())
  const[horario, setHorario] = useState(new Date().toLocaleTimeString())

  function handleDate(){
    const date = new Date()
    
    setData(date.toLocaleDateString())
    setHorario(date.toLocaleTimeString())

    alert(data + ' ' + horario)

    nav.navigate('InsertGlicemia', {data, horario})
  }

  return (
    <View style={styles.container} >
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Horário da Medição</Text>
      </View> 

      <View style={styles.glicContainer} >
        <TouchableOpacity style={styles.nowButton} onPress={() => handleDate() }>
          <View>
            <Text style={styles.txtButton} >AGORA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.afterButton} onPress={() => { nav.navigate('GHorario') }}>
          <View>
            <Text style={styles.txtButton} >MEDI ANTES</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}