import { StyleSheet, View, Form } from 'react-native';
import  Boton from "./componentes/Boton";
import FormularioIngreso from "./componentes/FormularioIngreso";

export default function App() {
  return (
    <View style={styles.container}>
      <FormularioIngreso></FormularioIngreso>
      <Boton></Boton>
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