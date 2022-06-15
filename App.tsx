import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Componente from "./componentes/texto.tsx";
import Boton from "./componentes/boton.tsx";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mis Prácticas Profesionalizantes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});