import React from "react"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import Home from "./screens/home"
import ProfilePage from "./screens/profile"

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <StyledSafeAreaView>
      <ProfilePage></ProfilePage>
    </StyledSafeAreaView>
  )
}
