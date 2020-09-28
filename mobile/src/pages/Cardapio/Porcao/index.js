import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles'

export default function Porcao() {
  const nav = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }} >ALIMENTO ESCOLHIDO</Text>
      </View>


      <View style={styles.porcaoContainer} >
        <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('Porcao') }}>
          <View style={{ alignItems: 'center' }} >
            <Icon
              name='add'
              color='#000'
              size={18}
            />
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 24 }} >0</Text>

        <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('Porcao') }}>
          <View style={{ alignItems: 'center' }} >
            <Icon
              name='remove'
              color='#000'
              size={18}
            />
          </View>
        </TouchableOpacity>

      </View>
        <Text>Tipos de porções</Text>
      <View>

      </View>
      <TouchableOpacity style={styles.btnAvancar} onPress={() => { nav.navigate('ChoosePage') }}>
        <View>
          <Text style={styles.txtButton} >AVANÇAR</Text>
        </View>
      </TouchableOpacity>
      <View>

      </View>
    </View>
  );
}