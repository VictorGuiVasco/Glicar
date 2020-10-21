import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Table from '../../../components/DataTable/choosePage'
import SearchBar from '../../../components/SearchBar'

import styles from './styles'

export default function ChoosePage() {
  const nav = useNavigation()

  function handleRegister() {
    alert('Prato Registrado com sucesso')
    nav.navigate('Porcao')
  }

  return (
    <View style={styles.container}>
      <View style={styles.foodContainer}>
        <SearchBar />
        <Table />
      </View>
    </View>
  );
}