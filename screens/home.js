import React from "react"
import styled from "styled-components/native"
import Map from "../components/map"
import MapMenuButton from "../components/map_menu_button"
import { markers } from "../test_data/home/markers"

const MapContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`

export default function Home() {
  return (
    <MapContainer>
      <Map markers={markers} />
      <MapMenuButton />
    </MapContainer>
  )
}
