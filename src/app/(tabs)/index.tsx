import { Text, StyleSheet, Image, View, Alert, Pressable } from 'react-native'
import { Link } from 'expo-router';


export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.article}>
        <Text style={styles.text}>
          Você esta conectado como:
        </Text>

        <Link href="/profile" asChild>
          <Pressable style={styles.profileBox}>
            <Image source={require('../../../assets/images/userIcon1x.png')} />
            <Text>
              Tabatazanco@gmail.com
            </Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.main}>
        <Text style={styles.t1}>Precisa de ajuda para resolver algum problema técnico?</Text>


        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Desenvolvimento 🛠️', 'Estamos em trabalhando para adicionar essa funcionalide!')}
        >
          <Text style={styles.t2}>
            Chamar iHelp!
          </Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 150
  },

  article: {
    display: 'flex',
    marginTop: 40,
    alignItems: 'center',
    gap: 10
  },

  profileBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: 220,
    padding: 5,
    paddingLeft: 8,
    gap: 10,
    borderRadius: 16,
    fontSize: 10,

    backgroundColor: '#f1f1f1'
  },
  text: {
    fontSize: 13
  },
  t1: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center'
  },

  t2: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    letterSpacing: 0.50
  },

  main: {
    display: 'flex',
    width: 280,
    gap: 30,
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 800,

    alignItems: "center",
    justifyContent: 'center',

    backgroundColor: "#0065FF",

  }
});
