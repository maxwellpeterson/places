import React from "react"
import BackButton from "../components/backbutton"
import FollowButton from "../components/followbutton"
import UsernameText from "../components/username"
import styled from "styled-components/native"
import ProfilePicture from "../components/profilepicture"
import AllProfileData from "../components/allprofiledata"
import { profileData } from "../components/profiledata"

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
