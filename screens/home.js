import React from "react"
import styled from "styled-components/native"
import Map from "../components/map"
import { markers } from "../test_data/home/markers.json"

const MapContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default function Home() {
  return (
    <MapContainer>
      <Map markers={markers} />
    </MapContainer>
  )
}
