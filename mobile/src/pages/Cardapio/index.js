import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Cardapio() {
  const nav = useNavigation();

  return (
    <View style={styles.container} >
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>CARDAPIO</Text>
      </View>

      <View style={styles.glicContainer} >
        <Text style={styles.text} >Horario da refeição</Text>

        <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('ChoosePage') }}>
          <View>
            <Text style={styles.txtButton} >AGORA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('CHorario') }}>
          <View>
            <Text style={styles.txtButton} >REFEIÇÃO PASSADA</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}