import React from "react"
import { StyleSheet, View, Text } from "react-native"
import MapView from "react-native-maps"
import { Marker, Callout } from "react-native-maps"

// Need to figure out how to control the size of the map, not sure if it can be styled like a normal view

export default function MapPanel({ markers }) {
  return (
    <MapView style={{ ...StyleSheet.absoluteFillObject }}>
      {markers.map((marker) => (
        <Marker key={marker.title} coordinate={marker.latlng}>
          <Callout onPress={() => alert(`You selected ${marker.title}!`)}>
            <Text>{marker.title}</Text>
          </Callout>
        </Marker>
      ))}
    </MapView>
  )
}
