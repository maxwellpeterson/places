import React, { useState } from "react"
import { Switch } from "react-native"
import styled from "styled-components"

const ItemContainer = styled.View`
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ItemLabel = styled.Text`
  font-size: 18px;
`

export default function MenuItem({ label }) {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <ItemContainer>
      <ItemLabel>{label}</ItemLabel>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </ItemContainer>
  )
}
