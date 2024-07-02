import Button from "@/components/button" 
import { useAuth, useUser } from "@clerk/clerk-expo";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
     const { user } = useUser()
     const { signOut } = useAuth()

     return (
          <View style={styles.container}>
               <View style={{ justifyContent: 'center', flexDirection: "row" ,alignItems: 'center', gap: 8, padding: 6,backgroundColor: "#f5f5f5", borderRadius: 60, borderColor: "#000", borderWidth: 1}}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.img} />
               
                    <Text style={styles.title}>
                         {user?.emailAddresses.toString()}
                    </Text>
               </View>


               <Button title="Sair" onPress={() => signOut()} imgUrl={undefined} />
          </View>
     )
}

const styles = StyleSheet.create({
     container: { flex: 1, padding: 32, justifyContent: 'center', alignItems: 'center', gap: 24 },
     title: { fontSize: 20 },
     img: { width: 30, height:30, borderRadius: 60 }
})