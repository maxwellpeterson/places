import React from "react"
import BackButton from "../components/profile-page/backbutton"
import FollowButton from "../components/profile-page/followbutton"
import UsernameText from "../components/profile-page/username"
import styled from "styled-components/native"
import ProfilePicture from "../components/profile-page/profilepicture"
import AllProfileData from "../components/profile-page/allprofiledata"
import { profileData } from "../test-data/profile/profiledata"

const Row = styled.View`
  display: flex;
  flex-direction: row;
`
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`
export default function ProfilePage() {
  return (
    <StyledSafeAreaView>
      <Row>
        <BackButton></BackButton>
        <UsernameText></UsernameText>
      </Row>
      <Row>
        <ProfilePicture></ProfilePicture>
        <AllProfileData profileData={profileData} />
        <FollowButton></FollowButton>
      </Row>
    </StyledSafeAreaView>
  )
}
