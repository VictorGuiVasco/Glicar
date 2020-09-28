import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles'

export default function Home() {
  const nav = useNavigation();

  return (
    <View style={styles.container} >
      <View style={styles.graficContainer}>
        <View style={styles.grafic}>
          <Text>GRAFICO GLICEMIA</Text>
        </View>

        <View style={styles.grafic}>
          <Text>GRAFICO CHO</Text>
        </View>
      </View>

      <View style={styles.foodContainer}>
        <Text>ALIMENTOS</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('Alarme') }}>
          <View>
            <Text style={styles.txtButton} >MARCAR ALARME</Text>
          </View>
        </TouchableOpacity>

    </View>
  );
}