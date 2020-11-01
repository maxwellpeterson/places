import React, { useState } from "react"
import styled from "styled-components/native"
import MapPanel from "../components/map/map-panel"
import MenuPanel from "../components/home/menu-panel"
import { MAP_COLORS } from "../styles/colors"
import { markers } from "../test-data/home/map-markers"

const MapContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`

const MENU_TEXT = {
  following: "Following",
  local: "Local",
  fromHome: "From Home",
}

export default function Home() {
  const [filters, setFilters] = useState({
    following: true,
    local: false,
    fromHome: false,
  })

  function toggleFilter(filter) {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    })
  }

  function buildMenuItem(key) {
    return {
      text: MENU_TEXT[key],
      color: MAP_COLORS[key],
      isSelected: filters[key],
      onToggle: () => toggleFilter(key),
    }
  }

  return (
    <MapContainer>
      <MapPanel markers={markers.filter((marker) => filters[marker.type])} />
      <MenuPanel
        items={["following", "local", "fromHome"].map(buildMenuItem)}
      />
    </MapContainer>
  )
}
