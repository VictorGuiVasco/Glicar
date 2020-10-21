import React from 'react';
import { View, Text, Image, } from 'react-native';

import styles from './styles'

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.userView}>
        <Text style={styles.text} >Olá{"\n"}Victor Vasconcelos</Text>
        <Image
          source={require('../../assets/logoIcon.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.userData}>

        <Text style={styles.textData}>
          <Text style={{ fontWeight: 'bold' }} >Sexo: </Text>
          <Text style={{ fontWeight: '500' }}>Masculino</Text>
        </Text>

        <Text style={styles.textData}>
          <Text style={{ fontWeight: 'bold' }} >Data de Nascimento: </Text>
          <Text style={{ fontWeight: '500' }}>01/09/02</Text>
        </Text>

        <Text style={styles.textData}>
          <Text style={{ fontWeight: 'bold' }} >Altura: </Text>
          <Text style={{ fontWeight: '500' }}>1.60</Text>
        </Text>

        <Text style={styles.textData}>
          <Text style={{ fontWeight: 'bold' }} >Peso: </Text>
          <Text style={{ fontWeight: '500' }}>63.8</Text>
        </Text>

        <Text style={styles.textData}>
          <Text style={{ fontWeight: 'bold' }} >IMC: </Text>
          <Text style={{ fontWeight: '500' }}>19.4</Text>
        </Text>

      </View>
    </View>
  );
}