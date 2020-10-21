import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: '#fff',
  },

  foodContainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: '5%',
    backgroundColor: '#ebebeb',
    borderRadius: 5
  },

  searchContainer: {
    borderRadius: 5,

    height: 50,
    padding: 12,

    fontSize: 15,

    backgroundColor: '#6DDDD0',
    color: '#fff',

    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBar: {
    flex: 1,
    height: 50,
    marginLeft: 15,
    justifyContent: 'center'
  },

  searchInput:{
    fontSize: 16,
    color: '#fff'
  },

  footer: {
    height: 150,
    width: '100%',

    backgroundColor: '#42A5FF',

    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  nutrientes: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerChild: {
    alignItems: 'center'
  },

  footerTitle: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline'
  },

  button: {
    borderRadius: 5,

    width: '70%',
    height: 50,
    padding: 12,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    shadowColor: "#000",
    backgroundColor: '#fff'
  },

  text: {
    fontSize: 18,
    color: '#7A63FF',
  }
})