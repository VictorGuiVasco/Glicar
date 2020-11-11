import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Horario() {
  const nav = useNavigation()

  const [layerDate, setLayerDate] = useState(new Date().getDate())
  const [horario, setHorario] = useState(new Date().toLocaleTimeString())

  const [showDate, setShow] = useState(false);
  const [showTime, setShowT] = useState(false);

  const [data, setData] = useState(new Date().getDate())
  const [mode, setMode] = useState('date')

  const onChange = (event, date) => {
    setShow(false);

    setData(date.toLocaleDateString());
    setLayerDate(date.getDate());
  };

  const onChangeT = (event, date) => {
    setShowT(false);
    setHorario(date.toLocaleTimeString());

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showModeT = (currentMode) => {
    setShowT(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>

      <View style={styles.dateTimeContainer} >
        <TouchableOpacity style={styles.textInput} onPress={() => { setShow(true); }}>
          <View>
            <Text style={styles.textDate} > Dia que mediu </Text>
            <Text style={styles.textDay} > {layerDate} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { showModeT('time'); }}>
          <View>
            <Text style={styles.text} > Ás {horario} </Text>
          </View>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.btn} onPress={() => { nav.navigate('InsertGlicemia', { data, horario }) }}>
        <View>
          <Text style={styles.txtButton} >AVANÇAR</Text>
        </View>
      </TouchableOpacity>

      {showDate && (
        <DateTimePicker
          mode={'date'}
          value={new Date()}
          display='spinner'
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}

      {showTime && (
        <DateTimePicker
          mode={mode}
          value={new Date()}
          display='spinner'
          onChange={onChangeT}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
}