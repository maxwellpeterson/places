import React, { useReducer } from "react"
import styled from "styled-components/native"
import MapPanel from "../components/map/map-panel"
import MenuPanel from "../components/home/menu-panel"
import { menu, menuDefaults, menuColors } from "../content/home"
import { markers } from "../test-data/home/map-markers"

const MapContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
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

*/

export default function Home() {
  // Calling toggleFilter toggles the boolean state value associated with the given filter
  // For example, calling toggleFilter("following") toggles the state of the following filter
  const [filters, toggleFilter] = useReducer(
    (state, toToggle) => ({
      ...state,
      [toToggle]: !state[toToggle],
    }),
    menuDefaults
  )

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
      <MapPanel markers={preprocessMarkers(markers)} />
      <MenuPanel items={menu.items.map(makeMenuItem)} />
    </MapContainer>
  )
}
