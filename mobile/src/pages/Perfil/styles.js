import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#fff'
      },

      userView: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: '7%',
        alignItems: 'center',
        justifyContent: 'space-between'
      },

      image: {
          width: 75,
          height: 75
      },

      text: {
        fontSize: 30,
        fontWeight: 'bold', 

        maxWidth: 290,
        color: '#42AEFF'
      },

      textData: {
        fontSize: 20,
        paddingLeft: 30,
        marginVertical: 10,
        color: '#7A63FF'
      },

      userData: {
          flex: 2
      },
})