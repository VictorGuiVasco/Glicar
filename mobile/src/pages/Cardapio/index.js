import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Cardapio() {
  const nav = useNavigation();



  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../assets/icon_cardapio.png')}
          style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Refeição"
          autoCorrect={false}
        />
      </View>

      <View style={styles.pratoContainer}>
        <Text style={styles.text}>Pratos Selecionados:</Text>

        <View style={styles.pratos}>
          <Text></Text>
        </View>

        <View style={styles.btnView}>

          <TouchableOpacity style={styles.btnPratos} onPress={ () => {nav.navigate('Prato')} } >
            <Text>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnPratos}>
            <Text>Descartar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}