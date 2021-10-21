import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Home } from './src/screnns/Home';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/auth';

// 2:27:01

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthProvider>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Home />
      </AuthProvider>
    );
  }
}
