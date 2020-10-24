import React from "react"
import styled from "styled-components"
import MenuItem from "./menu-item"

// Apply box shadow, possibly some transparency and background blur as well
const MenuContainer = styled.View`
  width: 100%;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
`

const MenuTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

const TitleContainer = styled.View`
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-bottom: 10px;
`

export default function MenuPanel() {
  return (
    <MenuContainer>
      <TitleContainer>
        <MenuTitle>Filter Places</MenuTitle>
      </TitleContainer>
      <MenuItem label={"People I Follow"} />
      <MenuItem label={"People From San Francisco"} />
      <MenuItem label={"People From Home"} />
    </MenuContainer>
  )
}
