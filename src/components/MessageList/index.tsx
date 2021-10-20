import React from 'react';
import { ScrollView } from 'react-native';
import { Message, MessageProps } from '../Message';
import { styles } from './styles';

export function MessageList() {
  const message: MessageProps = {
    id: '1',
    text: 'mensagem de teste',
    user: {
      name: 'Maxwel Santana',
      avatar_url: 'https://github.com/maxwelsantana.png',
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
