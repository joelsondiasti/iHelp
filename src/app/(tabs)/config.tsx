import { View, Text, StyleSheet } from 'react-native';



export default function Tab() {
     return (
          <View style={styles.container}>
               <Text> Voce esta acessando a configuração </Text>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
});