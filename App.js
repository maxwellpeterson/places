import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <StyledSafeAreaView>
      <Text>Replace this text component with your screen component!</Text>
      <StatusBar style="auto" />
    </StyledSafeAreaView>
  )
}
