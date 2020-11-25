import React from "react"
import { Pressable } from "react-native"
import styled from "styled-components/native"
import RadioButton from "./radio-button"

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const ItemLabel = styled.Text`
  font-size: 24px;
`

export default function MenuItem({ title, color, isSelected, onToggle }) {
  return (
    <Pressable onPress={onToggle}>
      <ItemContainer>
        <RadioButton color={color} isSelected={isSelected} />
        <ItemLabel>{title}</ItemLabel>
      </ItemContainer>
    </Pressable>
  )
}
