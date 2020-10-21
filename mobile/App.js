import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons';

import Login from './src/pages/Login';
import Senha from './src/pages/Senha';
import Cadastro from './src/pages/Cadastro';
import Wellcome from './src/pages/Wellcome';

import Home from './src/pages/Home';
import Perfil from './src/pages/Perfil';
import Cardapio from './src/pages/Cardapio';
import Glicemia from './src/pages/Glicemia';
import Alarme from './src/pages/Alarme';

//GlicemiaPages
import GHorario from './src/pages/Glicemia/Horario';
import InsertGlicemia from './src/pages/Glicemia/InsertGlicemia';

//CardapioPages
import CHorario from './src/pages/Cardapio/Horario';
import Prato from './src/pages/Cardapio/Prato';
import ChoosePage from './src/pages/Cardapio/ChoosePage';
import Porcao from './src/pages/Cardapio/Porcao';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Perfil: {
    name: 'ios-people'
  },
  Cardapio: {
    name: 'ios-menu'
  },
  Glicemia: {
    name: 'ios-heart'
  }
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#0C0C0C'
        },
        activeTintColor: '#FFF',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Cardapio" component={Cardapio} />
      <Tab.Screen name="Glicemia" component={Glicemia} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcome" >
        <Stack.Screen name="Wellcome" component={Wellcome} options={{ headerShown: false, }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
        <Stack.Screen name="Senha" component={Senha} options={{ headerShown: false, }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false, }} />

        <Stack.Screen name="Alarme" component={Alarme} options={{
          title: 'Horario do Alarme',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        {/* GlicemiaPages */}
        <Stack.Screen name="GHorario" component={GHorario} options={{
          title: 'Horario da Glicemia',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="InsertGlicemia" component={InsertGlicemia} options={{ headerShown: false, }} />

        {/* CardapioPages */}
        <Stack.Screen name="CHorario" component={CHorario} options={{
          title: 'Horario da Refeição',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Prato" component={Prato} options={{ headerShown: false, }} />
        <Stack.Screen name="ChoosePage" component={ChoosePage} options={{
          title: 'Faça seu prato',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Porcao" component={Porcao} options={{
          title: 'Selecione a Quantidade de Porções',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#42aeff'
          },
        }} />

        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}