import React from "react"
import { Text } from "react-native"
import { Marker, Callout } from "react-native-maps"

export default function MapMarker({ title, latlng }) {
  return (
    <Marker coordinate={latlng}>
      <Callout onPress={() => alert(`You selected ${title}!`)}>
        <Text>{title}</Text>
      </Callout>
    </Marker>
  )
}
