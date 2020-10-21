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
      <Home />
      <StatusBar style="auto" />
    </StyledSafeAreaView>
  )
}
