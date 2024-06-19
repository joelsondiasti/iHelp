import { View, Text, StyleSheet } from 'react-native';



export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.t2}>Você não possui chamado no Historico</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  t2: {
    fontSize: 24,
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center'
  },
});