import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SigninBox } from '../../components/SigninBox';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      {/* <SigninBox /> */}
      <SendMessageForm />
    </View>
  );
}
