import { AntDesign, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Stack, Tabs } from 'expo-router';

export default function TabLayout() {
     return (
          <Tabs screenOptions={{
               tabBarActiveTintColor: '#0065FF',
               headerShown: false,
          }}>
               <Tabs.Screen
                    name="index" //Home
                    options={{
                         title: '',
                         tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
                         tabBarStyle: {
                              display: 'flex',
                              justifyContent: 'center',
                              paddingTop: 10
                         }
                    }}
               />

               <Tabs.Screen
                    name="historico"
                    options={{
                         title: '',
                         tabBarIcon: ({ color }) => <FontAwesome5 name="clock" size={24} color={color} />,
                         tabBarStyle: {
                              display: 'flex',
                              justifyContent: 'center',
                              paddingTop: 10
                         }
                    }}
               />

               <Tabs.Screen
                    name="chat"
                    options={{
                         title: '',
                         tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />,
                         tabBarStyle: {
                              display: 'flex',
                              justifyContent: 'center',
                              paddingTop: 10
                         }
                    }}
               />


               <Tabs.Screen
                    name="config"
                    options={{
                         title: '',
                         tabBarIcon: ({ color }) => <AntDesign name="setting" size={24} color={color} />,
                         tabBarStyle: {
                              display: 'flex',
                              justifyContent: 'center',
                              paddingTop: 10
                         }
                    }}
               />
          </Tabs>
     );
}
