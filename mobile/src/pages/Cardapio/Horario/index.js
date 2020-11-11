import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const data = new Date()

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Horario() {
  const nav = useNavigation()

  const [dtnasc, setDtNasc] = useState('Dia que comeu')
  const [show, setShow] = useState(false);

  const onChange = (event, date) => {
    setShow(Platform.OS === 'ios');
    setDtNasc(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
  };

  return (
    <View style={styles.container}>

      <View style={styles.dateTimeContainer} >
        <TouchableOpacity style={styles.textInput} onPress={() => { setShow(true); }}>
          <View>
            <Text style={styles.textDate} > {(dtnasc.toString())} </Text>
            <Text style={styles.textDay} > {(data.getDate().toString())} </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.text} >Ás 15:30</Text>
      </View>


      <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('Prato') }}>
        <View>
          <Text style={styles.txtButton} >AVANÇAR</Text>
        </View>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={new Date()}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}