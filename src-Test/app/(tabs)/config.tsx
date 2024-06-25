import { View, Text, StyleSheet } from 'react-native';



export default function Tab() {
     return (
          <View style={styles.container}>
               <View >
                    <Text style={styles.t2}>Editar Perfil</Text>
                    <Text style={styles.t2}>Desativar Perfil</Text>
                    <Text style={styles.t2}>Excluir Perfil</Text>
               </View>
          </View>
     )
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