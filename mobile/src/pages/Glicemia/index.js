import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Glicemia() {
  const nav = useNavigation();

  return (
    <View style={styles.container} >
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Horário da Medição</Text>
      </View> 

      <View style={styles.glicContainer} >
        <TouchableOpacity style={styles.nowButton} onPress={() => { nav.navigate('InsertGlicemia') }}>
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