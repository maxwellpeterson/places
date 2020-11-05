import React from "react"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import Home from "./screens/home"
import PlacePage from "./screens/place"
import NewPost from "./screens/new-post"

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <StyledSafeAreaView>
      <NewPost />
      <StatusBar style="auto" />
    </StyledSafeAreaView>
  )
}
