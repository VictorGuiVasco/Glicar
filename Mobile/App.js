import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {

  /* width: 414px;
  height: 896px;
  overflow: hidden;
  background-color: #ffffff; */

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>

          <Image
            source={require('./src/assets/logo.png')}
            style={styles.logo}
          />

        </View>

        <View style={styles.inputView} >
          <TextInput
            style={styles.textInput}
            placeholder={"Nome"}
          />

          <TextInput
            style={styles.textInput}
            placeholder={"Senha"}
          />
        </View>

        <View style={styles.buttonView} >
          <TouchableOpacity style={styles.button} >
            <View style={styles.btnSenha} >
              <Text style={styles.btnText} >Esqueci minha senha</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} >
            <View style={styles.btnSingUp} >
              <Text style={styles.btnText} >Cadastar</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.singInView} >
          <TouchableOpacity style={styles.btnSingIn} >
            <View  >
              <Text style={styles.TextSingIn} >Sing In</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 164,
    height: 135
  },

  imageView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  textInput: {
    borderRadius: 8,

    padding: 12,
    height: 50,
    margin: 30,
    marginVertical: 5,

    fontSize: 20,

    backgroundColor: '#EBEBEB',
    color: '#333333'
  },

  buttonView: {

    marginHorizontal: 30,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    width: 150,
    height: 30,
    marginVertical: 10,
  },

  btnSingUp: {
    flex: 1,

    alignItems: 'flex-end',
    justifyContent: 'center',

  },

  btnSenha: {
    flex: 1,

    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  btnText: {
    fontSize: 14,

    textDecorationLine: 'underline',
    fontWeight: 'bold',

    color: '#AAA'
  },

  singInView: {
    flex: 1,

    marginHorizontal: 30,
    marginTop: 20,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',

  },

  btnSingIn: {
    borderRadius: 8,

    padding: 10,
    height: 45,
    width: 100,

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

  TextSingIn: {
    fontSize: 16,

    fontWeight: 'bold',
    color: '#333'
  },

});
