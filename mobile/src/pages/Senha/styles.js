import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'
import { MaskedViewBase } from '@react-native-community/masked-view'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: '#fff',
    justifyContent: "space-around"
  },

  imageView: {
    marginLeft: 30,
    justifyContent: 'center'
  },

  titulo: {
    fontSize:43,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#42AEFF',

    maxWidth: 250
  },

  textInput: {
    borderRadius: 5,

    padding: 12,
    height: 50,
    marginHorizontal: 30,
    marginVertical: 5,

    fontSize: 15,

    backgroundColor: '#EBEBEB',
    color: '#333333',
  },

  button: {
    borderRadius: 5,

    padding: 15,
    height: 50,
    marginHorizontal: 30,
    marginVertical: 5,

    flexDirection: 'row',
    justifyContent: 'center',

    backgroundColor: '#42AEFF',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  btnText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,

    fontWeight: 'bold',
    color: '#FFF'
  },
})