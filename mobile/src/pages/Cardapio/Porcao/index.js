import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles'
export default function Porcao({ route, navigation }) {
  const nav = useNavigation()

  const [number, setNumber] = useState(1)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.food} >Arroz Integral</Text>
      </View>

      <View style={styles.porcaoContainer} >
        <TouchableOpacity style={styles.btn} onPress={() => setNumber(number - 0.25)}>
          <View style={{ alignItems: 'center' }} >
            <Icon
              name='remove'
              color='#000'
              size={18}
            />
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 24 }} >{number}  x  25,8g</Text>

        <TouchableOpacity style={styles.btn} onPress={() => setNumber(number + 0.25)}>
          <View style={{ alignItems: 'center' }} >
            <Icon
              name='add'
              color='#000'
              size={18}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text>100g por porção</Text>
      <TouchableOpacity style={styles.btnAvancar} onPress={() => { nav.navigate('Prato') }}>
        <View>
          <Text style={styles.textButton} >AVANÇAR</Text>
        </View>
      </TouchableOpacity>
      <View>

      </View>
    </View>
  );
}