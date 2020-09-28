import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Horario() {
  const nav = useNavigation()

 return (
   <View style={styles.container}>
       <Text style={styles.text} >01/09/2002</Text>
       <Text style={styles.text} >15:30</Text>
       <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('InsertGlicemia') }}>
          <View>
            <Text style={styles.txtButton} >AVANÇAR</Text>
          </View>
        </TouchableOpacity>
   </View>
  );
}