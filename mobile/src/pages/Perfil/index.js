import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Perfil() {
  const nav = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.userView}>
        <Text style={styles.text} >Victor Vasconcelos</Text>
        <Image
          source={require('../../assets/logoIcon.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.userData}>
        <Text style={styles.textData}>
          <Text style={{ fontWeight: 'bold' }} >Data de Nascimento: </Text>
          <Text style={{ fontWeight: '500' }}>01/09/02</Text>
        </Text>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
          <Text style={styles.textData}>
            <Text style={{ fontWeight: 'bold' }} >Altura: </Text>
            <Text style={{ fontWeight: '500' }}>1.60</Text>
          </Text>

          <Text style={styles.textData}>
            <Text style={{ fontWeight: 'bold' }} >Peso: </Text>
            <Text style={{ fontWeight: '500' }}>63.8</Text>
          </Text>
        </View>

        <Text style={styles.textData}>
          <Text style={{ fontWeight: 'bold' }} >IMC: </Text>
          <Text style={{ fontWeight: '500' }}>19.4</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signUpButton} onPress={() => { nav.navigate('Alarme') }} >
          <View>
            <Text style={styles.textButton} >
              MARCAR ALARME
            </Text>
          </View>
        </TouchableOpacity>
      </View>


    </View>
  );
}