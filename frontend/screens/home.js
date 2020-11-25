import React, { useState, useReducer, useMemo } from "react"
import styled from "styled-components/native"
import MapPanel from "../components/map/map-panel"
import MenuPanel from "../components/home/menu-panel"
import ProfileButton from "../components/home/profile-button"
import {
  menuContent,
  initialMenuSelections,
  menuColors,
  initialMapRegion,
} from "../content/home"
import { getMarkersWithinRegion } from "../requests/map-requests"

const MapContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`

/*

There are three pieces of state here:

Filter state keeps track of the menu filters that are currently selected. It 
looks like this:
{
  following: true,
  local: false,
  fromHome: true
}

Map region state keeps track of the region of the map currently visible on
screen. It looks like this:
{
  latitude: 37.77,
  latitudeDelta: 0.20,
  longitude: -122.45,
  longitudeDelta: 0.15
}

Marker state keeps track of the markers that fall within the current map
region. Note that this may include markers whose menu category is not currently
selected, and that shouldn't actually be shown on the map. It looks like this:
[
  {
    "latlng": {
      "latitude": 37.84,
      "longitude": -122.48
    },
    "title": "Place One",
    "description": "This is Place One.",
    "type": "following"
  },
  {
    "latlng": {
      "latitude": 37.76,
      "longitude": -122.44
    },
    "title": "Place Two",
    "description": "This is Place Two.",
    "type": "local"
  }
]

*/

export default function Home({ navigation }) {
  // Calling toggleFilter toggles the boolean state value associated with the given filter
  // For example, calling toggleFilter("following") toggles the state of the following filter
  const [filters, toggleFilter] = useReducer(
    (state, toToggle) => ({
      ...state,
      [toToggle]: !state[toToggle],
    }),
    initialMenuSelections
  )

  // Keeps track of the visible region of the map as a user moves around
  const [mapRegion, updateMapRegion] = useState(initialMapRegion)

  // Updates the visible markers when a user finishes a map movement
  const markers = useMemo(() => getMarkersWithinRegion(mapRegion), [mapRegion])

  // Adds component defined information to a menu item object, including
  // information about current state and callbacks
  const makeMenuItem = (item) => ({
    ...item,
    isSelected: filters[item.id],
    onToggle: () => toggleFilter(item.id),
  })

  // Checks if a marker should be displayed on the map, based on whether
  // its menu category is currently selected
  const isActiveMarker = (marker) => filters[marker.type]

  // Adds locally defined information to a marker object, including
  // information about color and navigation routing
  const makeMarker = (marker) => ({
    ...marker,
    color: menuColors[marker.type],
    onPress: () => navigation.navigate("PlacePage", { title: marker.title }),
  })

  return (
    <MapContainer>
      <MapPanel
        markers={markers.filter(isActiveMarker).map(makeMarker)}
        initialRegion={initialMapRegion}
        onRegionChange={updateMapRegion}
      />
      <ProfileButton onPress={() => navigation.navigate("Profile")} />
      <MenuPanel items={menuContent.items.map(makeMenuItem)} />
    </MapContainer>
  )
}
