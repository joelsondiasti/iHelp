import { Text, StyleSheet, Image, View, Alert, Pressable } from 'react-native'
import { Link } from 'expo-router';


export default function Tab() {
  return (
    <View style={styles.container}>

      <Link href="/profile" asChild>
        <Pressable style={styles.profileBox}>
          <Image source={require('../../../assets/images/userIcon.png')} height={10} />
          <Text style={styles.title}>Tabata Zinco</Text>
        </Pressable>
      </Link>

      <View style={styles.main}>
        <Text style={styles.t2}>Precisa de ajuda para resolver algum problema técnico?</Text>


        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Desenvolvimento 🛠️', 'Estamos em trabalhando para adicionar essa funcionalide!')}
        >
          <Text style={styles.text}>
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
    gap: 250
  },

  profileBox: {
    width: 340,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingLeft: 15,
    gap: 30,
    marginTop: 60,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 5
  },

  title: {
    fontSize: 28,
    letterSpacing: 0.25,
  },

  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    backgroundColor: '#0065FF',
    alignSelf: 'center',
    height: 50,
    width: 300,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.98,
    shadowRadius: 6.65,
    elevation: 5
  },

  main: {
    display: 'flex',
    gap: 30,

    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: 400
  },

  t2: {
    fontSize: 24,
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center'
  },
});
