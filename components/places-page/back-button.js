import React from "react"
import { Button } from "react-native"
import styled from "styled-components/native"

const ButtonContainer = styled.View`
  margin: 30px;
  border-radius: 5px;
  background-color: #fafafa;
`

export default function BackButton() {
  return (
    <ButtonContainer>
      <Button title={"Back"} />
    </ButtonContainer>
  )
}