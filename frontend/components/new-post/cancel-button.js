import React from "react"
import { Button } from "react-native"
import styled from "styled-components/native"

const ButtonContainer = styled.View`
  background-color: #b3cccc;
  border-radius: 8px;
  padding-vertical: 3px;
  padding-horizontal: 7px;
  margin: 30px;
  border-radius: 5px;
  background-color: #fafafa;
`

export default function CancelButton({ onPress, navigation }) {
  return (
    <ButtonContainer>
      <Button
        title={"CANCEL"}
        onPress={() => navigation.navigate("PlacePage")}
      />
    </ButtonContainer>
  )
}
