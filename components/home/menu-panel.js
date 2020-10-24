import React from "react"
import { Text, View } from "react-native"
import styled from "styled-components"

// Apply box shadow, possibly some transparency and background blur as well
const MenuContainer = styled.View`
  width: 100%;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
`

const MenuTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const TitleContainer = styled.View`
  padding-bottom: 5px;
  border-bottom-width: 1px;
`

export default function MenuPanel() {
  return (
    <MenuContainer>
      <TitleContainer>
        <MenuTitle>Toggle Layers</MenuTitle>
      </TitleContainer>
    </MenuContainer>
  )
}
