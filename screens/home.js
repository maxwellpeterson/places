import React from "react"
import styled from "styled-components/native"
import Map from "../components/map"

const MapContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const markers = [
  {
    latlng: {
      latitude: 37.849269,
      longitude: -122.486808,
    },
    title: "Sausalito",
  },
  {
    latlng: {
      latitude: 37.761822,
      longitude: -122.448151,
    },
    title: "Cole Valley",
  },
  {
    latlng: {
      latitude: 38.374196,
      longitude: -122.599046,
    },
    title: "Bennet Valley",
  },
  {
    latlng: {
      latitude: 37.7822232,
      longitude: -122.3928787,
    },
    title: "South Park",
  },
  {
    latlng: {
      latitude: 37.74483,
      longitude: -122.43661,
    },
    title: "Noe Valley",
  },
  {
    latlng: {
      latitude: 37.908065,
      longitude: -122.666629,
    },
    title: "Stinson",
  },
]

export default function Home() {
  return (
    <MapContainer>
      <Map markers={markers} />
    </MapContainer>
  )
}
