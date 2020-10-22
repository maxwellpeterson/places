import React from "react"
import { StyleSheet } from "react-native"
import MapView from "react-native-maps"
import MapMarker from "./map-marker"

// Need to figure out how to control the size of the map, not sure if it can be styled like a normal view

export default function MapPanel({ markers }) {
  return (
    <MapView style={{ ...StyleSheet.absoluteFillObject }}>
      {markers.map((marker) => (
        <MapMarker key={marker.title} {...marker} />
      ))}
    </MapView>
  )
}