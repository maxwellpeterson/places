import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import StyledSafeAreaView from './styles/styled-safe-area-view';

export default function App() {
  return (
    <StyledSafeAreaView>
      <Text>Replace this text component with your screen component!</Text>
      <StatusBar style="auto" />
    </StyledSafeAreaView>
  );
}
