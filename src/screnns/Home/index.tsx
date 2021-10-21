import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SigninBox } from '../../components/SigninBox';
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';

export function Home() {
  const { isSigningIn, user } = useAuth();
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      {user ? <SendMessageForm /> : <SigninBox />}
    </View>
  );
}
