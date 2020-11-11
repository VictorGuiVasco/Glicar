import React from 'react';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Table() {
  const nav = useNavigation()

  return (
    <DataTable style={styles.table} >
      <DataTable.Header style={styles.cell}>
        <DataTable.Title >Food</DataTable.Title>
        <DataTable.Title numeric>Porção</DataTable.Title>
        <DataTable.Title numeric>CHO</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row style={styles.cell} >
        <DataTable.Cell  >Arroz Branco</DataTable.Cell>
        <DataTable.Cell numeric>1.5</DataTable.Cell>
        <DataTable.Cell numeric>47.5g</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.cell} >
        <DataTable.Cell>Frango Cozido</DataTable.Cell>
        <DataTable.Cell numeric>1</DataTable.Cell>
        <DataTable.Cell numeric>0g</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  )
}
