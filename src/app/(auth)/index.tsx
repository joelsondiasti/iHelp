import Button from "@/components/button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
     const { user } = useUser()
     const { signOut } = useAuth()
     return (
          <View style={styles.container}>
               <View style={{ justifyContent: 'center', alignItems: 'center', gap: 15 }}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.img} />
                    <Text style={styles.title}>
                          {user?.fullName}
                    </Text>
               </View>


               <Button title="Sair" icon="exit" onPress={() => signOut()} />
          </View>
     )
}

const styles = StyleSheet.create({
     container: { flex: 1, padding: 32, justifyContent: 'center', alignItems: 'center', gap: 24 },
     title: { fontWeight: 'bold', fontSize: 20 },
     img: { width: 92, height: 92, borderRadius: 12 }
})