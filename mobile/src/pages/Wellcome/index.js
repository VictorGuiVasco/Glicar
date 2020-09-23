import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants'

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
        <TouchableOpacity style={styles.button} onPress={ () => {nav.navigate('Login')}} >
          <View>
            <Text style={styles.text} >
              LOGIN
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ () => {nav.navigate('Cadastro')}} >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: '#FFF'
  },

  imageView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 205,
    height: 205
  },

  buttonView: {
    flex: 1,
    height: 50,

    justifyContent: 'center',
    alignItems: 'stretch',
  },

  button: {

    borderRadius: 5,

    padding: 12,
    height: 48,
    marginBottom: 10,
    marginHorizontal: 30,

    flexDirection: 'row',
    justifyContent: 'center',

    backgroundColor: '#fff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,

    fontWeight: 'bold',
    color: '#333'
  },
})