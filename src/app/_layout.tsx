import { tokenCache } from "@/storage/tokenCache";
import { prisma } from "@/utils/prisma";
import { ClerkProvider, useAuth, useUser } from "@clerk/clerk-expo";
import { Slot, router } from "expo-router";
import React, { useState } from "react";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";


const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
     .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

function InitialLayout() {
     const { isSignedIn, isLoaded } = useAuth();
     const {user} = useUser()
     const [isCheckingUser, setIsCheckingUser] = useState(true);

     useEffect(() => {
          const checkUserExistence = async () => {
               if (isSignedIn) {
                    try {
                         const client = await prisma.users.findUnique({
                              where: {
                                   id: user?.id
                              }
                         });

                         if (client) {
                              // Usuário existe, navega para a tela home
                              router.replace('(home)');
                         } else {
                              // Usuário não encontrado no banco de dados, redireciona para autenticação
                              router.replace('(auth)/');
                         }
                    } catch (error) {
                         console.error('Erro ao verificar usuário no banco:', error);
                         // Em caso de erro, redireciona para autenticação
                         router.replace('(auth)/');
                    } finally {
                         setIsCheckingUser(false);
                    }
               } else {
                    // Se não estiver logado, redireciona para autenticação
                    router.replace('(auth)/');
                    setIsCheckingUser(false);
               }
          };

          if (isLoaded) {
               checkUserExistence();
          }
     }, [isSignedIn, isLoaded]);

     return isLoaded && !isCheckingUser ? (
          <Slot />
     ) : (
          <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }} />
     );
}

export default function Layout() {
     return (
          <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
               <InitialLayout />
          </ClerkProvider>
     )
}