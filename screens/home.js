import React, { useState } from "react"
import styled from "styled-components/native"
import MapPanel from "../components/map/map-panel"
import MenuPanel from "../components/home/menu-panel"
import { markers } from "../test-data/home/map-markers"

const MapContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`

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

  return (
    <MapContainer>
      <MapPanel markers={markers.filter((marker) => filters[marker.type])} />
      <MenuPanel filters={filters} toggleFilter={toggleFilter} />
    </MapContainer>
  )
}
