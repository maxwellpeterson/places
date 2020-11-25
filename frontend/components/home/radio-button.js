import React from "react"
import styled from "styled-components/native"

// Code derived from:
// https://stackoverflow.com/a/36229563

const Border = styled.View`
  width: 24px;
  height: 24px;
  margin: 6px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${(props) => props.color || "black"};
  justify-content: center;
  align-items: center;
`

const Selector = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${(props) => props.color || "black"};
`

export default function RadioButton({ color, isSelected }) {
  return (
    <Border color={color}>{isSelected && <Selector color={color} />}</Border>
  )
}
