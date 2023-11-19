import { useAuth } from '@/src/contexts/auth-context';
import { Redirect, Stack, Tabs } from 'expo-router';
import { Button } from 'react-native';

export default function AppLayout() {
  const {authState, onLogout} = useAuth()

  return (
    <Tabs screenOptions={{headerStyle: {backgroundColor: "#024443"}, headerTitleStyle: {color: "#fff"}}}>
      <Tabs.Screen name='index' options={{title: "Linha do Tempo", headerLeft: () => <Button title='sign out' onPress={onLogout}/>}}/>
      <Tabs.Screen name='my-projects' options={{title: "Meus Projetos"}}/>
      <Tabs.Screen name='candidacy' options={{title: "Candidaturas", tabBarItemStyle: {display: authState.user.perfil == 'ALUNO' ? 'flex' : 'none'}}}/>
      <Tabs.Screen name='notifications' options={{title: "Notificações"}}/>
      <Tabs.Screen name='profile' options={{title: "Perfil"}}/>
    </Tabs>
  );
}
