import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: '#fff',
    justifyContent: "space-around"
  },

  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7A63FF'
  },

  graficContainer: {
    flex: 1,
    paddingBottom: 20,
    marginHorizontal: '5%',
    justifyContent: 'space-evenly',
  },

  foodContainer: {
    width: '85%',
    justifyContent: 'center',
    marginBottom: 20,

    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6DDDD0',
  },

  grafic: {
    height: '48%',
    borderWidth: 0.5,

    alignItems: 'center',
    justifyContent: 'center'
  },

  btn: {
    width: '70%',
    borderRadius: 5,

    padding: 12,
    height: 45,
    marginTop: 5,
    marginVertical: 15,

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
})