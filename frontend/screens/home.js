import React, { useState, useReducer, useMemo } from "react"
import styled from "styled-components/native"
import MapPanel from "../components/map/map-panel"
import MenuPanel from "../components/home/menu-panel"
import ProfileButton from "../components/home/profile-button"
import { menu, menuDefaults, menuColors } from "../content/home"
import { getMarkersWithinRegion } from "../requests/map-requests"

const MapContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`

/*

Filter state looks something like this:

{
  following: true,
  local: false,
  fromHome: true,
}

Would it be more performant for each filter to be a separate state entry?
We also want to be able to handle an arbitrary number of filters...

*/

// Define/calculate this somewhere else
const defaultMapRegion = {
  latitude: 37.77090181921317,
  latitudeDelta: 0.20944657739749317,
  longitude: -122.4506578747024,
  longitudeDelta: 0.153573774239959,
}

export default function Home({ navigation }) {
  // Calling toggleFilter toggles the boolean state value associated with the given filter
  // For example, calling toggleFilter("following") toggles the state of the following filter
  const [filters, toggleFilter] = useReducer(
    (state, toToggle) => ({
      ...state,
      [toToggle]: !state[toToggle],
    }),
    menuDefaults
  )

  // Keeps track of the visible region of the map as a user moves around
  const [mapRegion, updateMapRegion] = useState(defaultMapRegion)

  // Updates the markers to display when a user finishes a map movement
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
        initialRegion={defaultMapRegion}
        onRegionChange={updateMapRegion}
      />
      <ProfileButton onPress={() => navigation.navigate("Profile")} />
      <MenuPanel items={menu.items.map(makeMenuItem)} />
    </MapContainer>
  )
}
