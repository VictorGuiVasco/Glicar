import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

export default function Perfil() {
 return (
   <View style={styles.container}>
     <View style={styles.userView}>
       <Image 
        source={require('../../assets/login.png')}
        style={styles.image}
       />
       <Text style={styles.text} >Nome do Usuario</Text>
     </View>

     <View style={styles.userData}>
       <Text style={styles.textData} >Sexo: ...</Text>
       <Text style={styles.textData} >Data de Nascimento: ...</Text>
       <Text style={styles.textData} >Altura: ...</Text>
       <Text style={styles.textData} >Peso: ...</Text>
       <Text style={styles.textData} >IMC: ...</Text>
     </View>
   </View>
  );
}