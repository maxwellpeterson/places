import React from "react"
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
  return (
    <MapContainer>
      <MapPanel markers={markers} />
      <MenuPanel />
    </MapContainer>
  )
}
