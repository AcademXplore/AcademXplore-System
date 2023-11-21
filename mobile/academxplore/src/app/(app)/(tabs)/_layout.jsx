import { useAuth } from '@/src/contexts/auth-context';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native';

export default function AppLayout() {
  const {authState, onLogout} = useAuth()

  return (
    <Tabs screenOptions={
        {
          headerStyle: {backgroundColor: "#024443"}, 
          headerTitleStyle: {color: "#fff"}, 
          tabBarStyle: {backgroundColor: "#024443"}, 
          tabBarActiveBackgroundColor: "#fff", 
          tabBarActiveTintColor: "#024443",
          tabBarInactiveTintColor: "#fff",
          tabBarItemStyle: {marginVertical: 2, marginHorizontal: 5, borderRadius: 5}
        }
      }
    >
      <Tabs.Screen name='index' options={{title: "Linha do Tempo", headerLeft: () => <Button title='sign out' onPress={onLogout}/>, tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home-outline" size={size} color={color} />}}/>
      <Tabs.Screen name='my-projects' options={{title: "Meus Projetos", tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="google-analytics" size={size} color={color} />}}/>
      <Tabs.Screen name='candidacy' options={{title: "Candidaturas", tabBarItemStyle: {display: authState.user.perfil == 'ALUNO' ? 'flex' : 'none'}, tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account-supervisor-outline" size={size} color={color} />}}/>
      <Tabs.Screen name='notifications' options={{title: "Notificações", tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="bell-outline" size={size} color={color} />}}/>
      <Tabs.Screen name='profile' options={{title: "Perfil", tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account-circle-outline" size={size} color={color}/>}}/>
    </Tabs>
  );
}
