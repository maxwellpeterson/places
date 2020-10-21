import React from "react"
import { View, Button } from "react-native"
import styled from "styled-components/native"

const ButtonContainer = styled.View`
  margin: 10px;
  border-radius: 5px;
  background-color: #fafafa;
`

export default function MapMenuButton() {
  return (
    <ButtonContainer>
      <Button title={"Menu"} onPress={() => alert("You Opened the Menu!")} />
    </ButtonContainer>
  )
}
