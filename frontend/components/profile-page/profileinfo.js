import React from "react"
import styled from "styled-components/native"
import FollowButton from "./followbutton"

const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 19px;
`
const PlaceCityNumber = styled.Text`
font-weight: bold,
font-size: 18px;
padding: 0px 5px 0px 0px;
`
const PlaceCityText = styled.Text`
  font-size: 15px;
  padding: 2.5px 0px 0px 0px;
`
const ColumnLayout = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`
const Row = styled.View`
  display: flex;
  flex-direction: row;
`

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`

export default function ProfileInfo({ profileData }) {
  return (
    <StyledSafeAreaView>
      <ColumnLayout>
        <Row>
          <ProfileName>
            {profileData.firstName} {profileData.lastName}
          </ProfileName>
          <FollowButton />
        </Row>
        <Row>
          <PlaceCityNumber>{profileData.places}</PlaceCityNumber>
          <PlaceCityText>Places</PlaceCityText>
        </Row>
        <Row>
          <PlaceCityNumber>{profileData.cities}</PlaceCityNumber>
          <PlaceCityText>Cities</PlaceCityText>
        </Row>
      </ColumnLayout>
    </StyledSafeAreaView>
  )
}
