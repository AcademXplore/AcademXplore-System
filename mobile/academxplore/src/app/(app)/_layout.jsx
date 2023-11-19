import { useAuth } from "@/src/contexts/auth-context";
import { Redirect, Stack } from "expo-router";

export default function LayoutApp(){
  const {authState} = useAuth()

  if (!authState?.authenticated) {
    return <Redirect href="/home" />;
  }
  return (
    <Stack screenOptions={{headerShown: false, statusBarColor: "#024443"}}/>
  )
}