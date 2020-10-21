import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/MaterialIcons';

import Table from '../../../components/DataTable/prato'
import SearchBar from '../../../components/SearchBar'

import styles from './styles'

export default function Prato() {
  const nav = useNavigation()

  function handleRegister() {
    alert('Prato Registrado com sucesso')
    nav.navigate('Cardapio')
  }

  return (
    <View style={styles.container}>
      <View style={styles.foodContainer}>
        <View style={styles.searchContainer}>
          <Icon
            name='search'
            color='#fff'
            size={20}
          />

          <View style={styles.searchBar}>
            <TouchableOpacity style={styles.searchButton} onPress={() => {nav.navigate('ChoosePage')}}>
              <View>
                <Text style={styles.searchInput}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Table />
      </View>

      <View style={styles.footer}>

        <View style={styles.nutrientes}>
          <View style={styles.footerChild}>
            <Text style={styles.footerTitle} >CHO</Text>
            <Text>47.5g</Text>
          </View>

          <View style={styles.footerChild} >
            <Text style={styles.footerTitle} >Proteinas</Text>
            <Text>46.7g</Text>
          </View>

          <View style={styles.footerChild} >
            <Text style={styles.footerTitle} >Calorias</Text>
            <Text>162.5g</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
          <View style={{ alignItems: 'center' }} >
            <Text style={styles.text} >Concluir</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}