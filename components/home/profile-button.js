import React from "react"
import { Button, Pressable } from "react-native"
import styled from "styled-components/native"

const ButtonContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const ButtonText = styled.Text`
  font-size: 32px;
`

const text = "M"

export default function ProfileButton({ onPress, navigation }) {
  return (
    <ButtonContainer>
      <Button title={text} onPress={() => navigation.navigate("Profile")} />
    </ButtonContainer>
  )
}
