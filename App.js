import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Quévin Willian da Silva</Text>
      <Text>Desenvolvimento de Dispositivos Móveis - 22/02/2024</Text>
      <br></br>
      <Text>Eai prof</Text>
      <Text>Desenvolvimento de Dispositivos Móveis - 29/02/2024</Text>
      <Title></Title>
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
