import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';

import styles from './styles'

export default function Glicemia() {
 return (
   <View style={styles.container} >
     <Text style={styles.titulo}>GLICEMIA</Text>

    <View style={styles.glicContainer} >
      <Text style={styles.text} >Qual o nivel da sua Glicose</Text>
      <TextInput style={styles.glicose} />

      <Text style={styles.text} >Quando você mediu?</Text>
      <Text style={styles.tempo} >Selecione</Text>
    </View>

   </View>
  );
}