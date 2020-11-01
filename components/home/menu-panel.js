import React, { useState } from "react"
import styled from "styled-components/native"
import { FOLLOWING, LOCAL, FROM_HOME } from "../../styles/colors"
import MenuItem from "./menu-item"

// Apply box shadow, possibly some transparency and background blur as well
// Avoid leaky overlap with Apple Maps "legal" link in bottom right corner
const MenuContainer = styled.View`
  padding: 10px;
  margin: 9px;
  border-radius: 9px;
  background-color: #fff;
`

export default function MenuPanel({ items }) {
  return (
    <MenuContainer>
      {items.map((item) => (
        <MenuItem key={item.text} {...item} />
      ))}
    </MenuContainer>
  )
}
