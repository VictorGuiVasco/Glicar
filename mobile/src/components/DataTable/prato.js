import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ExampleFour() {

  const tableData =
    [
      ['Amido cozido','1.5 x Unidade Basica (45.7g)', 1.5],
      ['Frango Cozido','1 x Unidade Basica (0g)',  1],
    ]

  const [tableHead, setTableHead] = useState(['Food'])

  const element = (data, index) => (
    <TouchableOpacity style={styles.button}>
      <View>
        <Icon
          name='remove-circle-outline'
          color='#7463ff'
          size={22}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <Table borderStyle={{ borderColor: 'transparent' }}>
      <Row data={tableHead} style={styles.head} textStyle={styles.textHead} />
      {
        tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {
              rowData.map((cellData, cellIndex) => (
                <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.textRow} />
              ))
            }
          </TableWrapper>
        ))
      }
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
    
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },

  row: {
    flexDirection: 'row',

    height: 60,
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
    padding: '10%',
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