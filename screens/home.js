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

  const [mapRegion, updateMapRegion] = useState(defaultMapRegion)
  const markers = useMemo(() => getMarkersWithinRegion(mapRegion), [mapRegion])

  // Adds component defined information to a menu item, including information
  // about current state and callbacks
  const makeMenuItem = (item) => ({
    ...item,
    isSelected: filters[item.id],
    onToggle: () => toggleFilter(item.id),
  })

  // Filters markers based on current menu filter selections, and adds locally
  // defined information about color
  // Definitely a better way to define/call this...
  const preprocessMarkers = (markers) =>
    markers
      .filter((marker) => filters[marker.type])
      .map((marker) => ({ ...marker, color: menuColors[marker.type] }))

  return (
    <MapContainer>
      <MapPanel
        navigation={navigation}
        markers={preprocessMarkers(markers)}
        onRegionChange={updateMapRegion}
      />
      <ProfileButton onPress={() => navigation.navigate("Profile")} />
      <MenuPanel items={menu.items.map(makeMenuItem)} />
    </MapContainer>
  )
}
