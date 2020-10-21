import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 35,
    backgroundColor: '#fff',
  },

  tituloContainer: {
    marginVertical: 35,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7A63FF'
  },

  glicContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nowButton: {
    width: '70%',
    borderRadius: 5,

    padding: 15,
    height: 50,
    marginTop: 5,
    marginVertical: 8,

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

  afterButton: {
    width: '70%',
    borderRadius: 5,

    padding: 12,
    height: 45,
    marginTop: 5,

    flexDirection: 'row',
    justifyContent: 'center',

    backgroundColor: '#7A63FF',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  txtButton: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,

    fontWeight: 'bold',
    color: '#FFF'
  },
})