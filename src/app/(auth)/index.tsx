import Button from '@/components/button';
import { api } from '@/utils/api';
import { useOAuth } from '@clerk/clerk-expo';
import { createId } from '@paralleldrive/cuid2';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const googleOAuth = useOAuth({ strategy: 'oauth_google' });

  async function onGoogleSignIn() {
    try {
      setIsLoading(true);
      //  const redirectUrl = Linking.createURL('(register)', { scheme: 'myapp' });

      const oAuthFlow = await googleOAuth.startOAuthFlow();

      if (oAuthFlow.authSessionResult?.type === 'success') {
        const createUserOnApi = await api.post('/createuser', {
          id: oAuthFlow.signUp?.id || createId(),
          email: oAuthFlow.signUp?.emailAddress || '',
          name:
            `${oAuthFlow.signUp?.firstName} ${oAuthFlow.signUp?.lastName}` ||
            '',
        });

        if (createUserOnApi.status === 200) {
          if (oAuthFlow.setActive) {
            await oAuthFlow.setActive({
              session: oAuthFlow.createdSessionId,
            });
          }
        } else {
          console.error(`API Error: ${createUserOnApi.status} :: ${createUserOnApi.statusText} `)
        }

      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.img}
      />

      <View style={styles.logins}>
        <Button
          title="Entrar com Google"
          onPress={onGoogleSignIn}
          imgUrl={require('@/assets/logo/google.png')}
          isLoading={isLoading}
        />
        <Button
          title="Entrar com Facebook"
          onPress={() => console.log('deu ruim')}
          imgUrl={require('@/assets/logo/facebook.png')}
          isLoading={isLoading}
        />
        <Button
          title="Entrar com Github"
          onPress={() => console.log('deu ruim')}
          imgUrl={require('@/assets/logo/gitHub.png')}
          isLoading={isLoading}
        />
        <Button
          title="Entrar com Discord"
          onPress={() => console.log('deu ruim')}
          imgUrl={require('@/assets/logo/discord.png')}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logins: { width: '100%', height: 350, gap: 10 },
  img: { width: 250, marginTop: 100, resizeMode: 'contain' },
});
