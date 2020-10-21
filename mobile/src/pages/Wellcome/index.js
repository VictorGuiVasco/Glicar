import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Wellcome() {
  const nav = useNavigation();

 return (
   <View style={styles.container} >
     <View style={styles.imageView} >
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
     </View>

     <View style={styles.buttonView} >
        <TouchableOpacity style={styles.signInButton} onPress={ () => {nav.navigate('Login')}} >
          <View>
            <Text style={styles.text} >
              LOGIN
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton} onPress={ () => {nav.navigate('Cadastro')}} >
          <View>
            <Text style={styles.text} >
              CADASTRO
            </Text>
          </View>
        </TouchableOpacity>

     </View>
   </View>
  );
}
