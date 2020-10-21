import React from 'react';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Table() {
  const nav = useNavigation() 

  return (
    <DataTable style={styles.table} >
      <DataTable.Row style={styles.cell} >
        <DataTable.Cell>Amido de arroz</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.cell} onPress={() => {nav.navigate('Porcao')}}>
        <DataTable.Cell>Arroz Branco Cozido</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.cell} >
        <DataTable.Cell>Arroz carreteiro</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.cell} >
        <DataTable.Cell>Arroz doce</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.cell} >
        <DataTable.Cell>Arroz integral cozido</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  )
}
