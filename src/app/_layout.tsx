import { tokenCache } from '@/storage/tokenCache';
import {prisma} from '@/utils/prisma';
import { ClerkProvider, useAuth, useUser } from '@clerk/clerk-expo';
import { Slot, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const [isCheckingUser, setIsCheckingUser] = useState(true);

  // const api = null
  // const [ isLogin, setIsLogin] = useState(false)
  // async function checkUserLoggedIn(){
  //      const {logged} = await api.get("/login")
  //      if(logged){
  //           // redirect
  //      }
  // }
  useEffect(() => {
    console.log(isSignedIn);
  }, [isSignedIn]);

  async function checkUserExistence() {
    if (isSignedIn) {
      try {
        const client = await prisma.users.findUnique({
          where: {
            id: user?.id,
          },
        });

        console.log(isSignedIn, client);
        if (client) {
          // Usuário existe, navega para a tela home
          router.replace('(auth)/(register)');
        } else {
          // Usuário não encontrado no banco de dados, redireciona para autenticação
          router.replace('(auth)');
        }
      } catch (error) {
        console.error('Erro ao verificar usuário no banco:', error);
        // Em caso de erro, redireciona para autenticação
        router.replace('(auth)');
      } finally {
        setIsCheckingUser(false);
      }
    } else {
      // Se não estiver logado, redireciona para autenticação
      router.replace('(auth)');
      setIsCheckingUser(false);
    }
  }

  useEffect(() => {
    if (isLoaded) {
      checkUserExistence();
    }
  }, [isLoaded]);

  return !isLoaded && isCheckingUser ? (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
    />
  ) : (
    <Slot />
  );
}

export default function Layout() {
  return (
    <ClerkProvider
      publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
}
