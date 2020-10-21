import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function MyComponent() {
  const nav = useNavigation()

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Pesquisar"
      onPress={() => {nav.navigate('Procao')}}
      
      onChangeText={onChangeSearch}
      value={searchQuery}

      iconColor= '#fff'
      placeholderTextColor= '#fff'
      style={styles.search}
    />
  );
};  
