import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#42AEFF'
  },

  userView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '7%',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#42AEFF'

  },

  image: {
    width: 75,
    height: 75
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',

    maxWidth: 290,
    color: '#fff'
  },

  userData: {
    flex: 3,
    borderRadius: 90,

    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    backgroundColor: '#fff',
    paddingTop: 50,

    paddingHorizontal: 30,
  },

  textData: {
    fontSize: 20,
    marginVertical: 10,
    color: '#7A63FF',

  },

  buttonContainer: {
    backgroundColor: '#fff',
    paddingBottom: 10
  },

  signUpButton: {
    borderRadius: 5,

    padding: 15,
    height: 50,
    marginBottom: 10,
    marginHorizontal: 30,

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

  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,

    fontWeight: 'bold',
    color: '#FFF'
},
})