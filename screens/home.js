import React from "react"
import styled from "styled-components/native"
import MapPanel from "../components/map/map-panel"
import MenuButton from "../components/home/menu-button"
import { markers } from "../test-data/home/map-markers"

const MapContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`

export default function Home() {
  return (
    <MapContainer>
      <MapPanel markers={markers} />
      <MenuButton />
    </MapContainer>
  )
}
