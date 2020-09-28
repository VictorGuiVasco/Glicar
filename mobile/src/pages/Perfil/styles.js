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
        paddingLeft: 30,
        alignItems: 'center'
      },
      image: {
          width: 75,
          height: 75
      },
      text: {
        fontSize: 18,
        paddingLeft: 30,
        paddingTop: 10
      },
      textData: {
        fontSize: 18,
        paddingLeft: 30,
        marginVertical: 10
      },
      userData: {
          flex: 2
      },
})