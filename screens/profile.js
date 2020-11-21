import React, { useState, useReducer, useMemo } from "react"
import styled from "styled-components/native"
import profileData from "../test-data/profile/profiledata.json"
import BackButton from "../components/profile-page/backbutton"
import UsernameText from "../components/profile-page/username"
import ProfilePicture from "../components/profile-page/profilepicture"
import BioText from "../components/profile-page/biotext"
import ProfileInfo from "../components/profile-page/profileinfo"
import MapPanel from "../components/map/map-panel"
import { getMarkersWithinRegion } from "../requests/map-requests"
import { menuDefaults, menuColors } from "../content/home"

const Row = styled.View`
  display: flex;
  flex-direction: row;
`
const ColumnLayout = styled.View`
  flex: 1;
  flex-direction: column;
`

const ProfileBalance = styled.View`
  display: flex;
  padding-bottom: 10px;
  justify-content: space-evenly;
  background-color: "rgb(255, 255, 255)";
`

const MapContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`

const defaultMapRegion = {
  latitude: 37.77090181921317,
  latitudeDelta: 0.20944657739749317,
  longitude: -122.4506578747024,
  longitudeDelta: 0.153573774239959,
}

export default function ProfilePage({ navigation }) {
  const [filters, toggleFilter] = useReducer(
    (state, toToggle) => ({
      ...state,
      [toToggle]: !state[toToggle],
    }),
    menuDefaults
  )

  const [mapRegion, updateMapRegion] = useState(defaultMapRegion)
  const markers = useMemo(() => getMarkersWithinRegion(mapRegion), [mapRegion])

  const preprocessMarkers = (markers) =>
    markers
      .filter((marker) => filters[marker.type])
      .map((marker) => ({ ...marker, color: menuColors[marker.type] }))

  return (
    <ColumnLayout>
      <MapContainer>
        <MapPanel
          markers={preprocessMarkers(markers)}
          initialRegion={defaultMapRegion}
          onRegionChange={updateMapRegion}
        />
        <ProfileBalance>
          <Row>
            <BackButton navigation={navigation} />
            <UsernameText prop={profileData.username} />
          </Row>
          <Row>
            <ProfilePicture imageFile={profileData.profilePicture} />
            <ProfileInfo profileData={profileData} />
          </Row>
          <BioText profileBio={profileData.bio} />
        </ProfileBalance>
      </MapContainer>
    </ColumnLayout>
  )
}
