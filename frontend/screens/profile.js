import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import profileData from "../test-data/profile/profiledata.json"
import BackButton from "../components/profile-page/backbutton"
import UsernameText from "../components/profile-page/username"
import ProfilePicture from "../components/profile-page/profilepicture"
import BioText from "../components/profile-page/biotext"
import ProfileInfo from "../components/profile-page/profileinfo"

const Row = styled.View`
  display: flex;
  flex-direction: row;
`

export default function ProfilePage({ navigation }) {
  return (
    <View>
      <Row>
        <BackButton navigation={navigation} />
        <UsernameText prop={profileData.username} />
      </Row>
      <Row>
        <ProfilePicture imageFile={profileData.profilePicture} />
        <ProfileInfo profileData={profileData} />
      </Row>
      <BioText profileBio={profileData.bio} />
    </View>
  )
}
