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

export default function MenuPanel({ filters, toggleFilter }) {
  return (
    <MenuContainer>
      <MenuItem
        text={"Following"}
        color={FOLLOWING}
        isSelected={filters.following}
        onPress={() => toggleFilter("following")}
      />
      <MenuItem
        text={"Local"}
        color={LOCAL}
        isSelected={filters.local}
        onPress={() => toggleFilter("local")}
      />
      <MenuItem
        text={"From Home"}
        color={FROM_HOME}
        isSelected={filters.fromHome}
        onPress={() => toggleFilter("fromHome")}
      />
    </MenuContainer>
  )
}
