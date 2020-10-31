import React from "react"
import styled from "styled-components/native"

const ScreenContainer = styled.View`
  padding: 14px 0px 0px 60px;
`
const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
`

export default function UsernameText() {
  return (
    <ScreenContainer>
      <HeaderText>username</HeaderText>
    </ScreenContainer>
  )
}
