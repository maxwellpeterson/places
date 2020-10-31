import React from "react"
import { Button } from "react-native"
import styled from "styled-components/native"

const ButtonContainer = styled.View`
  background-color: #b3cccc,
  border-radius: 8px,
  padding-vertical: 7px,
  padding-horizontal: 14px,
  width: 75px,
  margin: 30px;
  border-radius: 5px;
  background-color: #fafafa;
`

export default function CancelButton() {
  return (
    <ButtonContainer>
      <Button title={"CANCEL"} />
    </ButtonContainer>
  )
}
