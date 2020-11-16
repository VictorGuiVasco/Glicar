import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Table from '../../components/DataTable/home'
import LineChart from '../../components/LineChart/gliChart'
import CHOChart from '../../components/LineChart/choChart'

import styles from './styles'

export default function Home() {

  return (
    <View style={styles.container}  >
      <Text style={styles.titulo} >Home</Text>
    
      <LineChart />

      <Text style={styles.text} >Alimentos</Text>
      <ScrollView style={styles.foodContainer}>
        <Table />
      </ScrollView>
    </View>
  );
}