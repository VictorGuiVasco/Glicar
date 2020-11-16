import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Glicemia() {
  const nav = useNavigation();

  const[date, setData] = useState(new Date().toLocaleDateString())
  const[hours, setHorario] = useState(new Date().toLocaleTimeString())

  function handleDate(){
    const time = new Date()
    
    setData(time.toLocaleDateString())
    setHorario(time.toLocaleTimeString())

    nav.navigate('InsertGlicemia', {date, hours})
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