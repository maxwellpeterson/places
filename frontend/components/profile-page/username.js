import React from "react"
import { Dimensions } from "react-native"
import styled from "styled-components/native"

const windowWidth = Dimensions.get("window").width

const ScreenContainer = styled.View`
  padding: 14px 0px 0px ${windowWidth / 8}px;
  height: 50px;
`
const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`

export default function UsernameText({ prop }) {
  return (
    <ScreenContainer>
      <HeaderText>{prop}</HeaderText>
    </ScreenContainer>
  )
}
