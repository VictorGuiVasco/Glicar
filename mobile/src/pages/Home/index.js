import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Table from '../../components/DataTable/home'
import LineChart from '../../components/LineChart/gliChart'
import CHOChart from '../../components/LineChart/choChart'

import styles from './styles'

export default function Home() {
  const nav = useNavigation();

  return (
    <View style={styles.container} >
      <Text style={styles.titulo} >Gráficos</Text>
      <LineChart />
      <CHOChart />

      <View style={styles.foodContainer}>
        <Table />
      </View>

      {/* <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('Alarme') }}>
        <View>
          <Text style={styles.txtButton} >MARCAR ALARME</Text>
        </View>
      </TouchableOpacity>
      */}
    </View>
  );
}