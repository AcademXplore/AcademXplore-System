import { useAuth } from "@/src/contexts/auth-context";
import { Redirect, Stack, usePathname } from "expo-router";
import { useState } from "react";

export default function LayoutApp(){
  const {authState} = useAuth()

  if (!authState?.authenticated) {
    return <Redirect href="/home" />;
  }
  return (
    <Stack screenOptions={{statusBarColor: "#024443", animation: 'fade_from_bottom'}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="project-details/[project]" options={{ title: "Detalhes do Projeto", presentation: 'modal',}}/>
    </Stack>
  )
}