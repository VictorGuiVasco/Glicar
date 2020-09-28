import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ChoosePage() {
    const nav = useNavigation()

    function handleRegister() {
        alert('Prato Registrado com sucesso')
        nav.navigate('Cardapio')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon
                    name='search'
                    color='#000'
                    size={18}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={"Search"}
                    placeholderTextColor='#777'

                    onChangeText={() => { }}
                />
            </View>

            <TouchableOpacity style={styles.alimentsContainer} onPress={() => { nav.navigate('Porcao') }}>
                <View >
                    <Text>Alimentos</Text>
                    <Text>Selecionados</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.footer}>
                <View style={styles.footerChild}>
                    <Text style={styles.footerTitle} >CHO</Text>
                    <Text>0g</Text>
                </View>

                <View style={styles.footerChild} >
                    <Text style={styles.footerTitle} >Proteinas</Text>
                    <Text>0g</Text>
                </View>

                <View style={styles.footerChild} >
                    <Text style={styles.footerTitle} >Calorias</Text>
                    <Text>0g</Text>
                </View>

                <View  >
                    <TouchableOpacity style={styles.btn} onPress={() => handleRegister() }>
                        <View style={{ alignItems: 'center' }} >
                            <Icon
                                name='arrow-forward'
                                color='#000'
                                size={18}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}