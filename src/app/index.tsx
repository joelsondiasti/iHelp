import Button from "@/components/button";
import { StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser"
import { useEffect, useState } from "react";
import { useOAuth } from "@clerk/clerk-expo"
import * as Link from "expo-linking"


WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
     const [isLoading, setIsLoading] = useState(false)

     const googleOAuth = useOAuth({ strategy: 'oauth_google' })

     async function onGoogleSignIn() {
          try {
               setIsLoading(true)
               const redirectUrl = Link.createURL('/')

               const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl })

               if (oAuthFlow.authSessionResult?.type === 'success') {
                    if (oAuthFlow.setActive) {
                         await oAuthFlow.setActive({
                              session: oAuthFlow.createdSessionId
                         })
                    }
               } else {
                    setIsLoading(false)
               }
          } catch (error) {
               console.log(error)
          }
     }

     useEffect(() => {
          WebBrowser.warmUpAsync()

          return () => {
               WebBrowser.coolDownAsync()
          }
     }, [])

     return (
          <View style={styles.container}>
               <Text style={styles.title}>
                    Entrar
               </Text>

               <Button title="Entrar com Google" icon="logo-google" onPress={onGoogleSignIn} isLoading={isLoading} />
          </View>
     )
}

const styles = StyleSheet.create({
     container: { flex: 1, padding: 32, justifyContent: 'center', gap: 12 },
     title: { fontWeight: 'bold', fontSize: 20 },

})