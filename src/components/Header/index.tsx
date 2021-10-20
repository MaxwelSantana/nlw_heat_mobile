import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/maxwelsantana.png" />
      </View>
    </View>
  );
}
