import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Componente(props) {
    return (< Text > Hola, {props.name} {props.apellido} </Text>);

}