import React, { useState } from "react"
import styled from "styled-components/native"
import MenuItem from "./menu-item"

// Apply box shadow, possibly some transparency and background blur as well
// Avoid leaky overlap with Apple Maps "legal" link in bottom right corner
const MenuContainer = styled.View`
  padding: 10px;
  border-radius: 7px;
  margin: 10px;
  background-color: #fff;
`

export default function MenuPanel({ items }) {
  return (
    <MenuContainer>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </MenuContainer>
  )
}
