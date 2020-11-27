import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'

export default function ExampleFour() {
  const nav = useNavigation()

  const tableData =
    [
      ['Alface crespa'],
      ['Arroz Integral'],
      ['Feijao carioca cozido'],
      ['Peito de frango assado'],
    ]

  return (
    <Table borderStyle={{ borderColor: 'transparent' }} >
      <Rows data={tableData} textStyle={styles.textRow} style={styles.row} />
    </Table>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6dddd0',
  },

  head: {
    height: 40,
    backgroundColor: '#ebebeb',
  },

  row: {
    height: 50,
    backgroundColor: '#ebebeb',

    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  },

  textHead: {
    fontSize: 13,
    padding: '5%',
    color: '#777'
  },

  textRow: {
    fontSize: 14,
    padding: '5%',
  },

  button: {
    padding: '5%',
    alignItems: 'flex-end',
  },

  btnText: {
    color: '#000',
    fontWeight: 'bold'
  }

})
