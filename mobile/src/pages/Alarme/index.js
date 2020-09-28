import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles'

export default function Alarme() {
 return (
    <View style={styles.container}>
    <Text style={styles.text} >01/09/2002</Text>
    <Text style={styles.text} >15:30</Text>
    <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('ChoosePage') }}>
       <View>
         <Text style={styles.txtButton} >MARCAR</Text>
       </View>
     </TouchableOpacity>
</View>
  );
}