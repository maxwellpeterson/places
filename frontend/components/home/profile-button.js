import React from "react"
import { Pressable } from "react-native"
import styled from "styled-components/native"
import { profileButtonText } from "../../content/home"

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

export default function ProfileButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <ButtonContainer>
        <ButtonText>{profileButtonText}</ButtonText>
      </ButtonContainer>
    </Pressable>
  )
}
